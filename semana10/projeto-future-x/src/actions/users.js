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

export const submitApplication = (name, age, applicationText, profession, country, tripId) => async (dispatch) => {
    try {
        const response = await axios.post(
            `https://us-central1-missao-newton.cloudfunctions.net/futureX/mateus/trips/${tripId}/apply`,
            {               
                "name": name,
                "age": age,
                "applicationText": applicationText,
                "profession": profession,
                "country": country                
            } 
        )  
        alert("Sucesso!")  
        dispatch(push(routes.tripList))
    } catch (err) {
        alert("Ocorre um erro, tente novamente")
        console.log(err)
    
    }
    
    
} 

export const approveCandidate = (tripId, candidateId, decision) => async () => {
    const token = window.localStorage.getItem("token") 
    try {
        await axios.put(
            `https://us-central1-missao-newton.cloudfunctions.net/futureX/mateus/trips/${tripId}/candidates/${candidateId}/decide`,
            {               
                "approve": decision,                         
            } ,
            {
                headers: {
                    auth: token
                }
            }
        )  
        alert("Sucesso!")  
    } catch (err) {
        alert("Ocorreu um erro, tente novamente")
        console.log(err)
    
    }
    
    
} 


