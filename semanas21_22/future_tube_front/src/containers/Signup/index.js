import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { FlexContainer } from '../../style/FlexContainer';
import { Form } from '../../components/Form';
import { Button } from '@material-ui/core';

const Signup = props => {

    const [name, setName] = React.useState()
    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()
    const [birthDate, setBirthDate] = React.useState()
    const [profilePicture, setProfilePicture] = React.useState()

    const handleFormSubmission = ev => {
        ev.preventDefault()
        console.log(email, password)
    }

    return <FlexContainer>
        <Form onSubmit={handleFormSubmission} buttonText="Criar Conta" fields={[
            {
                "label": "nome",
                "value": name,
                "onChange": ev => setName(ev.target.value)
            },
            {
                "label": "email",
                "type": "email",
                "value": email,
                "onChange": ev => setEmail(ev.target.value)
            },
            {
                "label": "senha",
                "type": "password",
                "value": password,
                "onChange": ev => setPassword(ev.target.value)
            },
            {
                "label": "data de nascimento",
                "type": "date",
                "value": birthDate,
                "onChange": ev => setBirthDate(ev.target.value)
            },
            {
                "label": "foto de perfil",
                "value": profilePicture,
                "onChange": ev => setProfilePicture(ev.target.value)
            }
        ]} />

    </FlexContainer>
}

const mapDispatchToProps = dispatch => ({
    goHome: () => dispatch(push(routes.root)),
})

export default connect(null, mapDispatchToProps)(Signup)