//import createStore from 'redux'
//import combineReducers from 'redux'
//import {global_state} from ./reducer.js
import { createStore, combineReducers } from "redux";
import { todos } from "./reducer";

//create a reducer object using the global state
const reducers = { todos };

const rootReducer = combineReducers(reducers);

export const configureStore = () => {
  return createStore(rootReducer);
};
