export interface IRoute {
  key: React.Key;
  name: string;
  points: number[][];
}

export interface ITableData extends IRoute {
  firstPoint: string;
  secondPoint: string;
  thirdPoint: string;
}

export interface IRoutesState {
  routes: IRoute[];
  chosenRoute: IRoute | null;
  OSRMRoute: number[] | null;
  error: boolean;
  loading: boolean;
}

export interface IFinalRoute {
  chosenRoute: IRoute;
  OSRMRoute: number[];
}

export interface IPoints {
  geocode: L.LatLng;
  popUp: string;
}

export interface IAxiosResponse {
  code: string;
  routes: any;
}
