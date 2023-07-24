import { combineReducers, configureStore } from "@reduxjs/toolkit";
import routesReducer from "./routesReducer";

const rootReducer = combineReducers({
  routes: routesReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
