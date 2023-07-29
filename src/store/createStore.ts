import { configureStore } from "@reduxjs/toolkit";
import routesReducer from "./routesReducer";
import createSagaMiddleware from "redux-saga";
import { mainSaga } from "../sagas/routeSaga";

const sagaMiddleware = createSagaMiddleware();

export function createStore() {
  return configureStore({
    reducer: { routesReducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  });
}

export const store = createStore();

sagaMiddleware.run(mainSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
