import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import { routes } from "../Router"
import logo from "../../images/logo.png"

const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
  align-items: center;      
`;

export const Button = styled.button`
  width:300px;
  height:50px;
  background-color:rgb(255,95,0);
  Font-size:20px;  
`

const LoginButton = styled.button`
  margin-left:200px;
  position:absolute;
  top:0;
  right:0;  
  background-color:rgb(255,95,0);
  color:white;
`

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    // <button onClick={this.props.goToTripCreationPage}>Criar uma Viagem</button>
    return (
      <HomeWrapper>
        <LoginButton onClick={this.props.goToLoginPage}>Login</LoginButton>
        <img width="300" src={logo}/>
        <Button onClick={this.props.goToTripListPage}>Escolher uma Viagem</Button>
       
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
