import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Button } from "../HomePage";
import styled from "styled-components";
import { routes } from "../Router"
import { fetchTripDetails } from "../../actions/trips"
import { approveCandidate } from "../../actions/users"


const Wrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;  
  color: rgb(166,62,0)
`;

const Div = styled.div`
  background-color: powderblue;
  color:black;
  h2 {text-align:center}
  button{
    background-color:black;
    color:white;
    border-radius:10px
  }
  section{text-align:center}
`

class TripDetailsPage extends Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.fetchTripDetails(this.props.tripId)
    if (!this.props.tripId) this.props.goToTripListPage()    
  }

  render() {
    const token = window.localStorage.getItem("token")
    return (
      <div>
      <Wrapper>
        <h2>{this.props.selectedTripDetails.name}</h2>
        <h3>"{this.props.selectedTripDetails.description}"</h3> 
        <h3>{`Partida: ${this.props.selectedTripDetails.date}`}</h3>
        <h3>{`Destino: ${this.props.selectedTripDetails.planet}`}</h3>
        <h3>{`Duração da Viagem: ${this.props.selectedTripDetails.durationInDays} dias`}</h3>  
        <Button onClick={this.props.goToTripApplicationPage}>QUERO ME INSCREVER!</Button>
        <hr/>
        </Wrapper>
        {token && (
          <Div>
            <h2>Candidatos</h2>
            {this.props.selectedTripDetails && this.props.selectedTripDetails.candidates.map(
              candidate => 
                <div key={candidate.id}>
                  Nome: {candidate.name}<br/>
                  Idade: {candidate.age}<br/>
                  País de Origem: {candidate.country}<br/>
                  Profissão: {candidate.profession}<br/>
                  Mensagem: {candidate.applicationText}<br/>
                  <section id={candidate.id} >
                    <button onClick ={
                      (ev) => this.props.approveCandidate(
                        this.props.tripId, ev.target.parentNode.id, true
                      )
                    } >Aprovar</button>
                    <button onClick ={
                      (ev) => this.props.approveCandidate(
                        this.props.tripId, ev.target.parentNode.id, false
                      )
                    }>Reprovar</button>
                  </section>
                  <hr/>
                </div>
            )}
          
          </Div>        
        )}
      </div>
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
    goToTripListPage: () => dispatch(push(routes.tripList)),
    fetchTripDetails: (id) => dispatch(fetchTripDetails(id)),
    approveCandidate: (tripId, candidateId, decision) => dispatch(
      approveCandidate(tripId, candidateId, decision)
    )
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage);
