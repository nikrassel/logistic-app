import { takeEvery, put } from "redux-saga/effects";
import {
  setTheRoute,
  occureError,
  beginLoading,
} from "../reducers/routesReducer";
import routeService from "../services/route.service";
import getPointsForRequest from "../helpers/getPointsForRequest";
import { IAxiosResponse } from "../models";
import { SET_ROUTE } from "../reducers/types";

export function* sagaWorker(action: any) {
  yield put(beginLoading());
  const points = getPointsForRequest(action.payload);
  const request: IAxiosResponse = yield routeService.getRoute(points);
  if (!request) {
    yield put(occureError());
  } else {
    const coordinatesCorrection = request.routes[0].geometry.coordinates.map(
      (item: number[]) => [item[1], item[0]]
    );
    const result = {
      chosenRoute: action.payload,
      OSRMRoute: coordinatesCorrection,
    };
    yield put(setTheRoute(result));
  }
}

export function* routeSaga() {
  yield takeEvery(SET_ROUTE, sagaWorker);
}
