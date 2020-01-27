const initialState = {
  tripList: [],
  selectedTripId: '',
  selectedTripDetails: ''
}

export default function tripReducer(state = initialState, action) {
  switch(action.type) {
    case "SET_TRIP_LIST":
      return {...state, tripList: action.payload.tripList}
    case "SET_TRIP_ID":
      return {...state, selectedTripId: action.payload.tripId }
    case "SET_TRIP_DETAILS":
      return {...state, selectedTripDetails: action.payload.tripDetails }
    default:
      return state
  }
}
