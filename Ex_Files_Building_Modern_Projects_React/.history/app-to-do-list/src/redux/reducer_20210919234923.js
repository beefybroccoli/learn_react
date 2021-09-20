import { CREATE_ACTION, REMOVE_ACTION, COMPLETE_TASK } from "./action";

//create a global state call "todos"
export const Global_State = (state = [], action) => {
  const { type, payload } = action;

  // eslint-disable-next-line default-case
  switch (type) {
    case CREATE_ACTION: {
      //get text property from payload
      const { text } = payload;
      const newTask = {
        text,
        isCompleted: false,
      };
      return state.concat(newTask);
    }
    case REMOVE_ACTION: {
      const { text } = payload;
      return state.filter((eachTask) => eachTask.text !== text);
    }
    case COMPLETE_TASK: {
      const { text } = payload;
      return state.map((eachTask) => {
        if (eachTask.text === text) {
          return { ...eachTask, isCompleted: true };
        } else {
          return eachTask;
        }
      });
    }
    default:
      return state;
  }
};
