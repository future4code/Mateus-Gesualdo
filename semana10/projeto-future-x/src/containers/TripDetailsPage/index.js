import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Button } from "../HomePage";
import styled from "styled-components";
import { routes } from "../Router"
import { fetchTripDetails } from "../../actions/trips"


const Wrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;  
  color: rgb(166,62,0)
`;

class TripDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    this.props.fetchTripDetails(this.props.tripId)
  }

  render() {
    return (
      <Wrapper>
        <h2>{this.props.selectedTripDetails.name}</h2>
        <h3>"{this.props.selectedTripDetails.description}"</h3> 
        <h3>{`Partida: ${this.props.selectedTripDetails.date}`}</h3>
        <h3>{`Destino: ${this.props.selectedTripDetails.planet}`}</h3>
        <h3>{`Duração da Viagem: ${this.props.selectedTripDetails.durationInDays} dias`}</h3>  
        <Button onClick={this.props.goToTripApplicationPage}>QUERO ME INSCREVER!</Button>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return{
    tripId: state.trips.selectedTripId,
    selectedTripDetails: state.trips.selectedTripDetails
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToTripApplicationPage: () => dispatch(push(routes.tripApplication)),
    fetchTripDetails: (id) => dispatch(fetchTripDetails(id))
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage);
