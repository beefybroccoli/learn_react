import { createStore, combineReducers } from "redux";
import {} from "./"

const reducers = {};

const rootReducer = combineReducers(reducers);

export const configureStore = () => {
  createStore(rootReducer);
};
