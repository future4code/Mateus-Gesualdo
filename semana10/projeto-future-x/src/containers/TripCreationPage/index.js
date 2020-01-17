import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router"
import { createTrip } from "../../actions/trips"

const Wrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class TripCreationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      planet: '',
      date: '',
      description: '',
      durationInDays: ''
    };
  }

  handleInputs = (ev) => {
    const { name, value } = ev.target
    this.setState({ [name]: value })
  }

  render() {
    const { name, planet, date, description, durationInDays } = this.state
    return (
      <Wrapper>
        <div>
          <TextField 
            required
            label="Nome:"
            id="name" 
            type="text" 
            name="name" 
            value={name} 
            onChange={this.handleInputs}
            pattern="[a-zA-z]{5,}"
            title="Apenas letras (mínimo 5)"
            placeholder="Apenas letras (mínimo 5)"
          /><br/>
          <label forHtml="">Planeta:</label><br/>
          <select required id="planet" name="planet" value={planet} onChange={this.handleInputs}>
            <label forHtml="">Nome:</label><br/>
            <option value="" >Selecione o planeta</option>
            <option>Mercúrio</option>
            <option>Vênus</option>
            <option>Marte</option>
            <option>Júpiter</option>
            <option>Saturno</option>
            <option>Urano</option>
            <option>Netuno</option>
          </select><br/>
          <TextField 
            required            
            id="date" 
            type="date" 
            name="date" 
            value={date} 
            onChange={this.handleInputs}
          /><br/>
          <TextField 
            required
            label="Descrição:"
            id="description" 
            type="text" 
            name="description" 
            value={description} 
            onChange={this.handleInputs}
            pattern="[a-zA-z]{30,}"
            title="Apenas letras (mínimo 30)"
            placeholder="Apenas letras (mínimo 30)"
          /><br/>
          <TextField 
            required
            label="Duração (dias):"
            id="durationInDays" 
            type="number" 
            name="durationInDays" 
            value={durationInDays} 
            onChange={this.handleInputs}
            min="50"
          /><br/>
          <Button onClick={
            () => this.props.createTrip(name, planet, date, description, durationInDays )
          }>Salvar</Button>
        </div>
     
      </Wrapper>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    irParaTelaLogin: () => dispatch(push(routes.login)),
    createTrip: (name, planet, date, description, durationInDays) => 
      dispatch(createTrip(name, planet, date, description, durationInDays))
  }
  
}

export default connect(null, mapDispatchToProps)(TripCreationPage);
/*
*/