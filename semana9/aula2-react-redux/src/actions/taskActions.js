export const createTaskAction = description => {
    return {
      type: "CREATE_TASK",
      payload: {
        description: description
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
