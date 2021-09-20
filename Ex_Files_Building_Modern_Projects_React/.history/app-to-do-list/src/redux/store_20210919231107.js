//import createStore from 'redux'
//import combineReducers from 'redux'
import { createStore, combineReducers } from "redux";
import { todos } from "./reducer";

const reducers = { todos };

const rootReducer = combineReducers(reducers);

export const configureStore = () => {
  return createStore(rootReducer);
};
