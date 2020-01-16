import axios from "axios"

export const fetchTripList = () => async (dispatch, getState) => {
    const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/futureX/mateus/trips")    
    dispatch(setTripList(response.data.trips))
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