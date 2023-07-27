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

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
