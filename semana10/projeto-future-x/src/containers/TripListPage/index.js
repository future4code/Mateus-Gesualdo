import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import { routes } from "../Router"
import { fetchTripList, setTripId } from "../../actions/trips"


const Wrapper = styled.form`
  width: 100%;
  height: 100vh;  
  justify-content: space-around;
  flex-direction:column;
  flex-wrap:wrap;
  align-items:center;
  display: flex;
  button {
    background-color: black;
    color:white;
    margin: 0 auto;
    border-radius:10px;
    font-weight:bold
  }
`;

const H2 = styled.h2`
  text-decoration: underline;
  color:rgb(166,62,0); 
  :hover{font-size:40px}  ;   
`

class TripListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount () {
    this.props.fetchTripList()
  }

  setDetailsPageContent = id => {
    this.props.setTripId(id)
    this.props.goToTripDetailsPage()
  }

  render() {
    const token = window.localStorage.getItem("token")
    return (
      <Wrapper>        
        {this.props.tripList.map(
          trip =>             
            <H2 
              id={trip.id}
              onClick={(ev) => this.setDetailsPageContent(ev.target.id)}
            >
              {trip.name}
            </H2>  
        )}  
        <button>Criar Viagem</button>      
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
    goToTripDetailsPage: () => dispatch(push(routes.tripDetails)),
    setTripId: (id) => dispatch(setTripId(id)),
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TripListPage);
