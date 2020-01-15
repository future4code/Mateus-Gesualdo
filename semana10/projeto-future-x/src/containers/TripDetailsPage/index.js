import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import { Button } from "../HomePage";
import styled from "styled-components";
import { routes } from "../Router"

const Wrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class TripDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <Wrapper>
        trip deails Page
        <Button onClick={this.props.goToTripApplicationPage}>QUERO ME INSCREVER!</Button>
      </Wrapper>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToTripApplicationPage: () => dispatch(push(routes.tripApplication))
  }
  
}

export default connect(null, mapDispatchToProps)(TripDetailsPage);
