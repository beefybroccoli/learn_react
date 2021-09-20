export const CREATE_ACTION = "CREATE_ACTION";
export const createAction = (text) => {
  return {
    type: CREATE_ACTION,
    payload: { text },
  };
};

export const REMOVE_ACTION = "REMOVE_ACTION";
export const removeAction = (text) => ({
  type: REMOVE_ACTION,
  payload: { text },
});

export const COMPLETE_ACTION = "COMPLETE_ACTION";
export const completeAction = (text) => {
  return {
    type: COMPLETE_ACTION,
    payload: { text },
  };
};
