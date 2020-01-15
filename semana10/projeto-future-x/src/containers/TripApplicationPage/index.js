import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchTripList } from "../../actions/trips"
//import { submitApplication } from "../../actions/users"
import { countries } from "./countries"

const Wrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class TripApplicationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      applicationText: '',
      profession: '',
      country: '',
      tripId: '',
    };
  }

  componentDidMount () {
    this.props.fetchTripList()
  }

  handleInputs = (ev) => {
    const { name, value } = ev.target
    this.setState({ [name]: value })
  }

  render() {
    const { name, age, applicationText, profession, country, tripId } = this.state
    return (
      <Wrapper>
        <form>
          <label forHtml="">Nome:</label><br/>
          <input id="name" type="text" name="name" value={name} onChange={this.handleInputs}/><hr/>
          <label forHtml="">Idade:</label><br/>
          <input id="age" type="number" name="age" value={age} onChange={this.handleInputs}/><hr/>
          <label forHtml="applicationText">Por quê você é um bom candidato a essa viagem?:</label><br/>
          <textarea id="applicationText" type="text" name="applicationText" value={applicationText} onChange={this.handleInputs}/><hr/>
          <label forHtml="profession">Profissão:</label><br/>
          <input id="profession" type="text" name="profession" value={profession} onChange={this.handleInputs}/><hr/>
          <label forHtml="">País de origem:</label><br/>
          <select id="country" name="country" value={country} onChange={this.handleInputs}>            
            <option>Selecione o país</option>
            {countries.map(
              country => (
                <option>{country}</option>
              )
            )}         
          </select><hr/>
          <label forHtml="tripId">Viagem:</label><br/>
          <select id="tripId" name="tripId" value={tripId} onChange={this.handleInputs}>            
            <option>Selecione a viagem</option>
            {this.props.tripList.map(
              trip => (
                <option value={trip.id}>{trip.planet}</option>
              )
            )}              
          </select><hr/>         
          <button >FINALIZAR</button>
        </form>        
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    tripList: state.trips.tripList
  }
  
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTripList: () => dispatch(fetchTripList()),
   // submitApplication: (data) => dispatch(submitApplication(data))
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TripApplicationPage);
