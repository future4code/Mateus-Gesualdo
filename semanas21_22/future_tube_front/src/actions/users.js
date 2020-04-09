import axios from 'axios'
import { routes } from '../containers/Router'
import { push } from 'connected-react-router'

export const signup = newUser => dispatch => {

    axios.post(
        "http://localhost:3000/users/signup",
        newUser
    ).then(res => {
        window.localStorage.setItem("token", res.data.token)
        alert("Sucesso!")
        dispatch(push(routes.root))
    }).catch(err => {
        console.log(err.message)
    })

    

}