const initialState = {
  tripList: [],
  tripDetailsId: ''
}

export default function tripReducer(state = initialState, action) {
  switch(action.type) {
    case "SET_TRIP_LIST":
      return {...state, tripList: action.payload.tripList}
    default:
      return state
  }
}
