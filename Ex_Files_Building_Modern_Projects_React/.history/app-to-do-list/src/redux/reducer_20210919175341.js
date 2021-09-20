import { CREATE_TASK, REMOVE_TASK } from "./action";

export const todos = (state, action) => {
  const { type, paylod } = action;

  switch (type) {
    case CREATE_TASK: {
      //get text property from payload
      const { text } = payload;
      const newTask = {
        text,
        isCompledted: false,
      };
      return state.concat(      const newTask = {
)
    }
    case REMOVE_TASK: {
    }
  }

  return state;
};
