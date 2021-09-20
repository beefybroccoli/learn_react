import { createStore, combineReducers } from "redux";
import { Func_todos } from "./reducer";

const reducers = { todos: Func_todos };

const rootReducer = combineReducers(reducers);

export const configureStore = () => {
  createStore(rootReducer);
};
