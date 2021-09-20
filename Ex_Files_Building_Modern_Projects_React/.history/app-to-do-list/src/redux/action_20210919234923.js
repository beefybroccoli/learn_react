export const CREATE_ACTION = "CREATE_TASK";
export const createTask = (text) => {
  return {
    type: CREATE_ACTION,
    payload: { text },
  };
};

export const REMOVE_ACTION = "REMOVE_TASK";
export const removeTask = (text) => ({
  type: REMOVE_ACTION,
  payload: { text },
});

export const COMPLETE_TASK = "COMPLETE_TASK";
export const completeTask = (text) => {
  return {
    type: COMPLETE_TASK,
    payload: { text },
  };
};
