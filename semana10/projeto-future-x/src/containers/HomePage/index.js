import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import { routes } from "../Router"
import logo from "../../images/logo.png"

const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

export const Button = styled.button`
  width:300px;
  height:50px;
  background-color:orange;
  Font-size:20px;
  color:blue;
`

const LoginButton = styled.button`
  margin-left:200px
`

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <HomeWrapper>
        <LoginButton onClick={this.props.goToLoginPage}>Login</LoginButton>
        <img src={logo}/>
        <Button onClick={this.props.goToTripListPage}>Escolher uma Viagem</Button>
        <button onClick={this.props.goToTripCreationPage}>Criar uma Viagem</button>
      </HomeWrapper>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToLoginPage: () => dispatch(push(routes.login)),
    goToTripListPage: () => dispatch(push(routes.tripList)),
    goToTripCreationPage: () => dispatch(push(routes.tripCreation)),
  }
  
}

export default connect(null, mapDispatchToProps)(HomePage);
