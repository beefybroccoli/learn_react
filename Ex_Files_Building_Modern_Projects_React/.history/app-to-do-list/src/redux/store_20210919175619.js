import { createStore, combineReducers } from "redux";
import {} from "./reducer"

const reducers = {};

const rootReducer = combineReducers(reducers);

export const configureStore = () => {
  createStore(rootReducer);
};
