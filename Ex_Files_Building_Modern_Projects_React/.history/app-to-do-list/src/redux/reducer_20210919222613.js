import { CREATE_TASK, REMOVE_TASK } from "./action";

export const todos = (state = [], action) => {
  const { type, payload } = action;

  // eslint-disable-next-line default-case
  switch (type) {
    case CREATE_TASK: {
      //get text property from payload
      const { text } = payload;
      const newTask = {
        text,
        isCompleted: false,
      };
      return state.concat(newTask);
    }
    case REMOVE_TASK: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    case COMPLETE_TASK:
        {
            const{text} = payload;
            return 
        }
    default:
      return state;
  }
};
