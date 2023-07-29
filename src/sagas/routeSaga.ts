import { takeEvery, put } from "redux-saga/effects";
import { SET_ROUTE, setTheRoute } from "../store/routesReducer";
import routeService from "../services/route.service";
import getPointsForRequest from "../helpers/getPointsForRequest";

// @ts-ignore
export function* setRouteSaga(action) {
  const points = getPointsForRequest(action.payload);
  // @ts-ignore
  const request = yield routeService.getRoute(points);
  const coordinatesCorrection = request.routes[0].geometry.coordinates.map(
    (item: any) => [item[1], item[0]]
  );
  const result = {
    chosenRoute: action.payload,
    OSRMRoute: coordinatesCorrection,
  };
  yield put(setTheRoute(result));
}

export function* mainSaga() {
  yield takeEvery(SET_ROUTE, setRouteSaga);
}
