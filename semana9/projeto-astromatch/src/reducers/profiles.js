const initialState = {profileToSwipe: "ok1"}

const profiles = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      console.log(action.payload.profile)
      return {...state, profileToSwipe: action.payload.profile }
    default:
      return state
  }  
}

export default profiles
