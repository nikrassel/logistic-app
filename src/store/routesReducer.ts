import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IRoutesState } from "../models";
import type { RootState } from "./createStore";

const initialState: IRoutesState = {
  routes: [
    {
      key: "1",
      name: "Маршрут №1",
      pointOne: [59.84660399, 30.29496392],
      pointTwo: [59.82934196, 30.42423701],
      pointThree: [59.83567701, 30.38064206],
    },
    {
      key: "2",
      name: "Маршрут №2",
      pointOne: [59.82934196, 30.42423701],
      pointTwo: [59.82761295, 30.41705607],
      pointThree: [59.84660399, 30.29496392],
    },
    {
      key: "3",
      name: "Маршрут №3",
      pointOne: [59.83567701, 30.38064206],
      pointTwo: [59.84660399, 30.29496392],
      pointThree: [59.82761295, 30.41705607],
    },
  ],
  chosenRoute: null,
};

const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    setTheRoute(state, action: PayloadAction<React.Key>) {
      const routeIndex = state.routes.findIndex(
        (route) => route.key === action.payload
      );
      state.chosenRoute = state.routes[routeIndex];
    },
  },
});

const { reducer: routesReducer, actions } = routesSlice;
const { setTheRoute } = actions;

export const choseTheRoute = (data: React.Key) => (dispatch: any) => {
  dispatch(setTheRoute(data));
};

export const getAllRoutes = () => (state: RootState) => state.routes.routes;

export const getChosenRoute = () => (state: RootState) =>
  state.routes.chosenRoute;

export default routesReducer;
