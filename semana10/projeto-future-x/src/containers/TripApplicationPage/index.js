import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchTripList } from "../../actions/trips"
import { submitApplication } from "../../actions/users"
import { countries } from "./countries"

const Wrapper = styled.form`
  width: 100%;
  height: 100vh;  
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction:column
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
    };
  }

  handleInputs = (ev) => {
    const { name, value } = ev.target
    this.setState({ [name]: value })
  }

  render() {
    const { name, age, applicationText, profession, country, tripId } = this.state
    return (
      <Wrapper>
        <label forhtml="">Nome:</label><br/>
        <input required
          id="name" 
          type="text" 
          name="name" 
          value={name} 
          onChange={this.handleInputs} 
          pattern="[a-zA-Z]{3,}" 
          title="Apenas letras  (mínimo 3)" 
          placeholder="Apenas letras  (mínimo 3)"
        /><hr/>
        <label forhtml="">Idade:</label><br/>
        <input required
          id="age" 
          type="number" 
          name="age" 
          value={age} 
          onChange={this.handleInputs}
          min="18"
          title="Mínimo 18 anos" 
          placeholder="Mínimo 18 anos"
        /><hr/>
        <label forhtml="applicationText">Por quê você é um bom candidato a essa viagem?</label><br/>
        <input required
          id="applicationText" 
          type="text" 
          name="applicationText" 
          value={applicationText} 
          onChange={this.handleInputs}
          pattern="[a-zA-Z]{30,}" 
          title="Apenas letras  (mínimo 30)" 
          placeholder="Apenas letras  (mínimo 30)"
        /><hr/>
        <label forhtml="profession">Profissão:</label><br/>
        <input required
          id="profession" 
          type="text" 
          name="profession" 
          value={profession} 
          onChange={this.handleInputs}
          pattern="[a-zA-Z]{10,}" 
          title="Apenas letras  (mínimo 10)" 
          placeholder="Apenas letras  (mínimo 10)"
        /><hr/>
        <label forhtml="">País de origem:</label><br/>
        <select required id="country" name="country" value={country} onChange={this.handleInputs}>            
          <option>Selecione o país</option>
          {countries.map(
            country => (
              <option>{country}</option>
            )
          )}         
        </select><hr/>
              
        <button 
          onClick={ 
            () => this.props.submitApplication(
              name, age, applicationText, profession, country, this.props.tripId
            ) 
          } 
        >
          Enviar
        </button>                
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    tripId: state.trips.selectedTripId
  }
  
}

function mapDispatchToProps(dispatch) {
  return {
    submitApplication: ( name, age, applicationText, profession, country, tripId ) => (
      dispatch(submitApplication( name, age, applicationText, profession, country, tripId ))
    )
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TripApplicationPage);
