//import createStore from 'redux'
//import combineReducers from 'redux'
//import {global_state} from ./reducer.js
import { createStore, combineReducers } from "redux";
import { Global_State } from "./reducer";

//create a reducer object using the global state
const reducers = { Global_State: Global_State };

//create rootReducer object using combineReducers(reducers)
const rootReducer = combineReducers(reducers);

//create a cb function, which return createStore(rootReducer)
export const configureStore = () => {
  return createStore(rootReducer);
};