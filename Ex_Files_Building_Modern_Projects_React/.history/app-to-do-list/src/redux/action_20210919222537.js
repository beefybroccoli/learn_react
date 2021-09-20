export const CREATE_TASK = "CREATE_TASK";
export const createTask = (text) => {
  return {
    type: CREATE_TASK,
    payload: { text },
  };
};

export const REMOVE_TASK = "REMOVE_TASK";
export const removeTask = (text) => ({
  type: REMOVE_TASK,
  payload: { text },
});

export const COMPLETE_TASK = "COMPLETE_TASK";
export const completeTask = (text) =>{
  return {
    type: COMPLETE_TASK,
    payload:{text},
  }
}