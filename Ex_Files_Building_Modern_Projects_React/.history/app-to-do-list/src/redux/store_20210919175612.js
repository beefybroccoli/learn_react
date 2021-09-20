import { createStore, combineReducers } from "redux";
import {}

const reducers = {};

const rootReducer = combineReducers(reducers);

export const configureStore = () => {
  createStore(rootReducer);
};
