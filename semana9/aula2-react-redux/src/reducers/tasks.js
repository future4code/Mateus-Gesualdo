const initialState = {
    taskList: [],
    newDescription: '',
    filter: 'Todas'
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_TASK":         
            return {
                ...state, 
                taskList: [
                    ...state.taskList, 
                    {
                        id: state.taskList.length,
                        description: action.payload.description ,
                        complete: false
                    }
            ], newDescription: ""}
        case "UPDATE_DESCRIPTION":         
            return {...state, newDescription: action.payload.description }
        case "COMPLETE_TASK":
            const id = action.payload.id

            state.taskList[id].complete = !state.taskList[id].complete
            return state 
        default:
            return state;
    }
  };
  
  export default taskReducer;