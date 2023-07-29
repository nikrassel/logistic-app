export interface IRoute {
  key: React.Key;
  name: string;
  pointOne: number[];
  pointTwo: number[];
  pointThree: number[];
}

export interface ITableData extends IRoute {
  firstPoint: string;
  secondPoint: string;
  thirdPoint: string;
}

export interface IRoutesState {
  routes: IRoute[];
  chosenRoute: IRoute | null;
  OSRMRoute?: number[];
}

export interface IFinalRoute {
  chosenRoute: IRoute;
  OSRMRoute: number[];
}

export interface IPoints {
  geocode: L.LatLng;
  popUp: string;
}
