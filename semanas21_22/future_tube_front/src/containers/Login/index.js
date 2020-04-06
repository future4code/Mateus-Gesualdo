import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import TextField from '@material-ui/core/TextField';
import { MainContainer } from '../../components/MainContainer';

const Login = props => {
    return <MainContainer>

        <TextField label="Login" variant="outlined"/>
    </MainContainer>
}

const mapDispatchToProps = dispatch => ({
    goToLogin: () => dispatch.push(routes.login)
})

export default connect(null, mapDispatchToProps)(Login)