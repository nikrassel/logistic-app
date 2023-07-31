import { createAction, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IRoutesState, IFinalRoute, ITableData } from "../models";
import { SET_ROUTE, OCCURE_ERROR, BEGIN_LOADING } from "./types";

const initialState: IRoutesState = {
  routes: [
    {
      key: "1",
      name: "Маршрут №1",
      points: [
        [59.84660399, 30.29496392],
        [59.82934196, 30.42423701],
        [59.83567701, 30.38064206],
      ],
    },
    {
      key: "2",
      name: "Маршрут №2",
      points: [
        [59.82934196, 30.42423701],
        [59.82761295, 30.41705607],
        [59.84660399, 30.29496392],
      ],
    },
    {
      key: "3",
      name: "Маршрут №3",
      points: [
        [59.83567701, 30.38064206],
        [59.84660399, 30.29496392],
        [59.82761295, 30.41705607],
      ],
    },
  ],
  chosenRoute: null,
  OSRMRoute: null,
  error: false,
  loading: false,
};

const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    setTheRoute(state, action: PayloadAction<IFinalRoute>) {
      const routeIndex = state.routes.findIndex(
        (route) => route.key === action.payload.chosenRoute.key
      );
      state.chosenRoute = state.routes[routeIndex];
      state.OSRMRoute = action.payload.OSRMRoute;
      state.loading = false;
    },
    errorOccurred(state) {
      state.error = true;
      state.loading = false;
    },
    beginLoading(state) {
      state.loading = true;
    },
  },
});

export const setRoute = createAction<ITableData>(SET_ROUTE);
export const occureError = createAction(OCCURE_ERROR);
export const beginLoading = createAction(BEGIN_LOADING);

export const { setTheRoute } = routesSlice.actions;
export default routesSlice.reducer;
