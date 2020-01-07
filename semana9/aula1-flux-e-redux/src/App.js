import React from 'react';
import './App.css';
import { createStore } from "redux";

const updateNewDescription = (newDescription) => {
  return {
    type: "UPDATE_NEW_DESCRIPTION",
    payload: {newDescription: newDescription} 
  };
};

const createTask = (description) => {
  return {
    type: "CREATE_TASK",
    payload: {description: description} 
  };
};

const completeTask = (id) => {
  return {
    type: "COMPLETE_TASK",
    payload: {id: id}
  };
};

const deleteTask = (id) => {
  return {
    type: "DELETE_TASK",
    payload: {id: id}
  };
};

const completeAllTasks = () => {
  return {
    type: "COMPLETE_ALL_TASKS",
  };
};

const changeFilter = (filter) => {
  return {
    type: "CHANGE_FILTER",
    payload: {filter: filter}
  };
};

const initialState = {
  newDescription: "",
  tasks: [
    {
      ID: 0, 
      description: "Use Redux" , 
      done: false
    }
  ]
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_DESCRIPTION":
      const newState = { value: state.value + 1 };
      return newState;
   default:
      return state;
  }
};

const store = createStore(taskReducer);

function App(props) {

  const handleInput = (ev) => store.dispatch(updateNewDescription(ev.target.value))

  return (
    <div className="App">
      <h1>4Task</h1>
      <section>
        <input placeholder="Enter new task" onChange={handleInput}/>
        <button>Create</button>
        <hr/>
      </section>
      <ul>
        <li>
          <div>
            <input type="checkbox" />
            Use Redux
          </div>
          <button>x</button>
        </li>
        <li>
          <div>
            <input type="checkbox" />
            Use Redux
          </div>
          <button>x</button>
        </li>
        <li>
          <div>
            <input type="checkbox" />
            Use Redux
          </div>
          <button>x</button>
        </li>
        <li>
          <div>
            <input type="checkbox" />
            Use Redux
          </div>
          <button>x</button>
        </li>
        <hr/>
      </ul>      
      <button>Marcar todas</button>
      <form>
        <input type="radio" name="filter" value="all" />Todas
        <input type="radio" name="filter" value="done"/>Completas
        <input type="radio" name="filter" value="pending"/>Pendentes
      </form>  
         
    </div>
  );
}

export default App;
