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