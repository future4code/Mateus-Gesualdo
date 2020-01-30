import React from "react";
import { connect } from "react-redux";
import CreationForm from '../CreationForm'
import TaskLists from '../TaskLists'
import styled from 'styled-components'

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-content: stretch;
`

class Planner extends React.Component {
  render() {
    return (
      <Wrapper>
        <h1>Planejamento Semanal</h1>
        <CreationForm/>      
        <TaskLists/>
      </Wrapper>
    )
  }
}

export default connect()(Planner);
