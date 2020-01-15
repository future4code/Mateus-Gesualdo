import axios from "axios"
import { routes } from "../containers/Router"
import { push } from "connected-react-router"

export const fetchToken = (email, password) => async (dispatch) => {
    const response = await axios.post(
        "https://us-central1-missao-newton.cloudfunctions.net/futureX/mateus/login",
        {
            "email": email,
            "password": password
        }
    )    
    window.localStorage.setItem("token", response.data.token)
    dispatch(push(routes.tripList))
}



