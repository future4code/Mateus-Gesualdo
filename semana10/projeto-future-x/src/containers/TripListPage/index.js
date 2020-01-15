import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import { routes } from "../Router"
import { fetchTripList } from "../../actions/trips"

const Wrapper = styled.form`
  width: 100%;
  height: 100vh;  
  justify-content: space-around;
  flex-direction:column;
  align-items:center;
  display: flex;
`;

class TripListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount () {
    this.props.fetchTripList()
  }

  render() {
    return (
      <Wrapper>
        {this.props.tripList.map(
          trip=> (
            <div>
              <h2>{trip.name}</h2>
              <button onClick={this.props.goToTripDetailsPage}>Ver detalhes</button>
            </div>            
          )
        )}        
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
    goToTripDetailsPage: () => dispatch(push(routes.tripDetails))
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TripListPage);
