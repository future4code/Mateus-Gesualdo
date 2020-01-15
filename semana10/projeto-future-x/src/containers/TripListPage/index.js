import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router"
import tripReducer from "../../reducers/trips"
import { fetchTripList } from "../../actions/trips"

const TripListWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
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
      <TripListWrapper>
        {this.props.tripList.map(trip=>trip.name)}        
      </TripListWrapper>
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
    fetchTripList: () => dispatch(fetchTripList())
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TripListPage);
