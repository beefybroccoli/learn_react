import { CREATE_ACTION, REMOVE_ACTION, COMPLETE_ACTION } from "./action";

//create a global state call "todos"
export const Global_State = (state = [], action) => {
  const { type, payload } = action;

  // eslint-disable-next-line default-case
  switch (type) {
    case CREATE_ACTION: {
      //get data from payload
      const { text } = payload;
      //create a newTask object
      const newTask = {
        text,
        isCompleted: false,
      };
      //store the newTask object in state 
      return state.concat(newTask);
    }
    case REMOVE_ACTION: {
      const { text } = payload;
      return state.filter((eachTask) => eachTask.text !== text);
    }
    case COMPLETE_ACTION: {
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
