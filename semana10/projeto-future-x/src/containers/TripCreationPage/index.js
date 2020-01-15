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
    return (
      <HomeWrapper>
        <form>
          <label forHtml="">Nome:</label><br/>
          <input id="name" type="text" name="name" value={this.state.name} onChange={this.handleInputs}/><hr/>
          <label forHtml="">Planeta:</label><br/>
          <select id="planet" name="planet" value={this.state.planet} onChange={this.handleInputs}>
            <label forHtml="">Nome:</label><br/>
            <option>Selecione o planeta</option>
            <option>Mercúrio</option>
            <option>Vênus</option>
            <option>Marte</option>
            <option>Júpiter</option>
            <option>Saturno</option>
            <option>Urano</option>
            <option>Netuno</option>
            <option>Plutão</option>            
          </select><hr/>
          <label forHtml="date">Data:</label><br/>
          <input id="date" type="date" name="date" value={this.state.date} onChange={this.handleInputs}/><hr/>
          <label forHtml="description">Descrição:</label><br/>
          <input id="description" type="text" name="description" value={this.state.description} onChange={this.handleInputs}/><hr/>
          <label forHtml="durationInDays">Duração (dias):</label><br/>
          <input id="durationInDays" type="number" name="durationInDays" value={this.state.durationInDays} onChange={this.handleInputs}/>    <hr/>
          <button onClick={()=>console.log(this.state)}>Salvar</button>
        </form>
     
      </HomeWrapper>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    irParaTelaLogin: () => dispatch(push(routes.login))
  }
  
}

export default connect(null, mapDispatchToProps)(TripCreationPage);
/*
}*/