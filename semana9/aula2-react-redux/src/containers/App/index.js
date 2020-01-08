import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { createTaskAction } from "../../actions/taskActions";
import { updateDescriptionAction } from "../../actions/taskActions";

const App = props => {
  
  return (
    <div className="App">      
      <h1>4Task</h1>
      <section>
        <input placeholder="Enter new task" value={props.newDescription} onChange={(ev) => props.updateDescription(ev.target.value)} />
        <button onClick={() => props.createTask(props.newDescription)}>Create</button>
        <hr/>
      </section>
      <ul>
        {props.taskList.map(
          task => (
            <li>
              {task}
            </li>            
          )
        )}
      </ul>            
    </div>
  );
};

const mapStateToProps = state => {
  return {    
    taskList: state.tasks.taskList,
    newDescription: state.tasks.newDescription
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTask: task => dispatch(createTaskAction(task)),
    updateDescription: description => dispatch( updateDescriptionAction( description ) )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
