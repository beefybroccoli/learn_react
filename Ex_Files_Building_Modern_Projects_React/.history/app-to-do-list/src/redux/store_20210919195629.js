import { createStore, combineReducers } from "redux";
import { todos } from "./reducer";

const reducers = { todos: Func_todos };

const rootReducer = combineReducers(reducers);

export const configureStore = () => {
  return createStore(rootReducer);
};