import axios from "axios"
import {routes} from "../containers/Router"
import {push} from "connected-react-router"

export const fetchTripList = () => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    try{
        const response = await axios.get(
            "https://us-central1-missao-newton.cloudfunctions.net/futureX/mateus/trips", 
            {
                headers: {
                    auth: token
                }
            }
        )    
        dispatch(setTripList(response.data.trips))
    } catch (err) {
        alert("Ocorreu um erro")
        console.log(err)
    }
}

const setTripList = tripList => ({
    type: "SET_TRIP_LIST",
    payload: {
        tripList
    }
})

export const setTripId = tripId => ({
    type: "SET_TRIP_ID",
    payload: {
        tripId
    }
})

export const fetchTripDetails = (id) => async (dispatch) => {
    const token = window.localStorage.getItem("token")   
    const response = await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/mateus/trip/${id}`,
        {
            headers: {
                auth: token
            }
        }
    ) 
    dispatch(setTripDetails(response.data.trip))
}

const setTripDetails = tripDetails => ({
    type: "SET_TRIP_DETAILS",
    payload: {
        tripDetails
    }
})

export const createTrip = (name, planet, date, description, durationInDays) => async (dispatch) => {
    const token = window.localStorage.getItem("token")  
    try{ 
        await axios.post(
            `https://us-central1-missao-newton.cloudfunctions.net/futureX/mateus/trips`,
            {
                "name": name, 
                "planet": planet, 
                "date": date, 
                "description": description, 
                "durationInDays": durationInDays
            },
            {
                headers: {
                    auth: token
                }
            }
        ) 
        alert("Viagem criada!")
        dispatch(push(routes.tripList))
    } catch (e) {
        alert("Ocorreu um erro, tente novamente")
        console.log(e)
    }
}

