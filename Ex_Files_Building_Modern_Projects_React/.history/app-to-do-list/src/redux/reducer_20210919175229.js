import { CREATE_TASK, REMOVE_TASK } from "./action";

export const todos = (state, action) => {
  const { type, paylod } = action;

  switch (type) {
    case CREATE_TASK: {
        //get text property from payload
        
    }
    case REMOVE_TASK: {
    }
  }

  return state;
};