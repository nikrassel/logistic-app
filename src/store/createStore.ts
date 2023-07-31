import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import routesReducer from "../reducers/routesReducer";
import { routeSaga } from "../sagas/routeSaga";

const sagaMiddleware = createSagaMiddleware();

export function createStore() {
  return configureStore({
    reducer: { routesReducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  });
}

export const store = createStore();

sagaMiddleware.run(routeSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
