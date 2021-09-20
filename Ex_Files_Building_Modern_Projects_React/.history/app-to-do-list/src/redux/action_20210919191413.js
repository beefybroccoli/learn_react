export const CREATE_TASK = "CREATE_TASK";
export const createTask = (text) => ({
  type: CREATE_TASK,
  paylod: ${ text },
});

export const REMOVE_TASK = "REMOVE_TODO";
export const removeTask = (text) => ({
  type: REMOVE_TASK,
  paylod: { text },
});
