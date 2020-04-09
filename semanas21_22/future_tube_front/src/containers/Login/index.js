import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { FlexContainer } from '../../style/FlexContainer';
import { Form } from '../../components/Form';
import { Button } from '@material-ui/core';

const Login = props => {

    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()

    const handleFormSubmission = ev => {
        ev.preventDefault()
        console.log(email, password)
    }

    return <FlexContainer>
        <Form onSubmit={handleFormSubmission} buttonText="Entrar" fields={[
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
            }
        ]} />

        <Button variant="contained" color="secondary" onClick={() => props.goToSignup()}>Cadastrar</Button>

    </FlexContainer>
}

const mapDispatchToProps = dispatch => ({
    goHome: () => dispatch(push(routes.root)),
    goToSignup: () => dispatch(push(routes.signup))
})

export default connect(null, mapDispatchToProps)(Login)