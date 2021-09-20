export const CREATE_ACTION = "CREATE_ACTION";
export const createTask = (text) => {
  return {
    type: CREATE_ACTION,
    payload: { text },
  };
};

export const REMOVE_ACTION = "REMOVE_ACTION";
export const removeTask = (text) => ({
  type: REMOVE_ACTION,
  payload: { text },
});

export const COMPLETE_ACTION = "COMPLETE_ACTION";
export const completeTask = (text) => {
  return {
    type: COMPLETE_ACTION,
    payload: { text },
  };
};
