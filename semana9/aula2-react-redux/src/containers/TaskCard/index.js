import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components'
import { completeTaskAction } from "../../actions/taskActions"

const Button = styled.button`
  color:red
  background-color:khaki
`

const Li = styled.li`
  display:flex;
  justify-content:space-between;
  align-items: center
`

const Span= styled.span`
  text-decoration: ${props => props.decoration}
`

function taskCard (props) {

  return (
    <Li>
      <div>
        <input id={props.id} type="checkbox" checked={props.complete} onChange={ev => props.completeTask(ev.target.id)} />
        <Span decoration={ `${props.complete ? "line-through" : "none"}`} >{props.task}</Span>              
      </div>
      <Button>x</Button>
    </Li>            
  )
      
};

const mapStateToProps = state => {
  return {    
   // task: state.tasks.taskList,
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    completeTask: id => dispatch(completeTaskAction(id)),
   
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(taskCard);
