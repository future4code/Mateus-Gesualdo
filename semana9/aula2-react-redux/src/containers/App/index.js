import React from "react";
import { connect } from "react-redux";
import { createTaskAction } from "../../actions/taskActions";
import { updateDescriptionAction } from "../../actions/taskActions";
import TaskCard from "../TaskCard"

function App (props) {
  
  return (
    <div className="App">      
      <h1>4Task</h1>
      <section>
        <input placeholder="Enter new task" value={props.newDescription} onChange={(ev) => props.updateDescription(ev.target.value)} />
        <button onClick={() => props.createTask(props.newDescription)}>Create</button>
        <hr/>
      </section>
      <ul>
        {props.taskList.filter(
          (tas) => (
            props.filter === "Todas" 
          )
        ).map(
          (task, i) => (
            <TaskCard key={i} task={task.description} complete={task.complete} id={task.id} />                       
          )
        )}
      </ul>  
      Exibindo:
      <select>
        <option>Todas</option>
        <option>Completas</option>
        <option>Pendentes</option>
      </select>          
    </div>
  );
  
};

const mapStateToProps = state => {
  return {    
    taskList: state.tasks.taskList,
    newDescription: state.tasks.newDescription,
    filter: state.tasks.filter
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
