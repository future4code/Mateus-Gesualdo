import axios from "axios"
import { routes } from "../containers/Router"
import { push } from "connected-react-router"

export const fetchToken = (email, password) => async (dispatch) => {
    try {
        const response = await axios.post(
            "https://us-central1-missao-newton.cloudfunctions.net/futureX/mateus/login",
            {
                "email": email,
                "password": password
            }
        )    
        window.localStorage.setItem("token", response.data.token)
        dispatch(push(routes.tripList))
    } catch (err) {
        alert("Dados inválidos!")
        console.log(err)
    }
}

export const submitApplication = (name, age, applicationText, profession, country, tripId) => async () => {
    const token = window.localStorage.getItem("token")    
    try {
        const response = await axios.post(
            `https://us-central1-missao-newton.cloudfunctions.net/futureX/mateus/trips/${tripId}/apply`,
            {               
                "name": name,
                "age": age,
                "applicationText": applicationText,
                "profession": profession,
                "country": country                
            } ,
            {
                headers: {
                    auth: token
                }
            } 
        )  
        console.log(response)  
    } catch (err) {
        console.log(err)
    
    }
    
    
} 


