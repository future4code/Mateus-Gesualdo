export const createTaskAction = description => {
    return {
      type: "CREATE_TASK",
      payload: {
        description
      }
    };
};

export const updateDescriptionAction = description => {
  return {
    type: "UPDATE_DESCRIPTION",
    payload: {
      description: description
    }
  };
};

export const completeTaskAction = id => {
  return {
    type: "COMPLETE_TASK",
    payload: {
      id
    }
  };
};
