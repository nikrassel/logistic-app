import { createAction, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IRoutesState, IFinalRoute, ITableData } from "../models";
// import type { RootState } from "./createStore";

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
  error: false,
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
    },
    errorOccurred(state) {
      state.error = true;
    },
  },
});

export const SET_ROUTE = "routes/setRoute";
export const OCCURE_ERROR = "routes/errorOccurred";
export const setRoute = createAction<ITableData>(SET_ROUTE);
export const occureError = createAction(OCCURE_ERROR);

export const { setTheRoute } = routesSlice.actions;
export default routesSlice.reducer;

// const { reducer: routesReducer, actions } = routesSlice;
// const { setTheRoute } = actions;

// export const choseTheRoute = (data: React.Key) => (dispatch: any) => {
//   dispatch(setTheRoute(data));
// };

// export const getAllRoutes = () => (state: RootState) => state.routes.routes;

// export const getChosenRoute = () => (state: RootState) =>
//   state.routes.chosenRoute;

// export default routesReducer;
