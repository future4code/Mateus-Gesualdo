import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router"

const HomeWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <HomeWrapper>
        Home Page
        <button onClick={this.props.irParaTelaLogin}>Logar</button>
      </HomeWrapper>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    irParaTelaLogin: () => dispatch(push(routes.login))
  }
  
}

export default connect(null, mapDispatchToProps)(HomePage);
