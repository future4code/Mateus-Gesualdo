const initialState = {
    taskList: [],
    newDescription: ''
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_TASK":         
            return {taskList:[...state.taskList, action.payload.description ], newDescription: ""}
        case "UPDATE_DESCRIPTION":         
            return {...state, newDescription: action.payload.description }
        default:
            return state;
    }
  };
  
  export default taskReducer;