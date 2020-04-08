import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'

const Home = props => {
    React.useEffect(
        () => {
            const token = window.localStorage.getItem("token")
            if (!token) props.goToLogin()
        },
        []
    )

    return <div>
        Home
    </div>
}

const mapDispatchToProps = dispatch => ({
    goToLogin: () => dispatch(push(routes.login))
})

export default connect(null, mapDispatchToProps)(Home)