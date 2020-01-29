import React from "react";
import { connect } from "react-redux";
import CreationForm from '../CreationForm'
import styled from 'styled-components'

const PlannerWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: stretch;
`

class Planner extends React.Component {
  render() {
    return (
      <PlannerWrapper>
        <CreationForm/>        
      </PlannerWrapper>
    )
  }
}

export default connect()(Planner);
