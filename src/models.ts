export interface ITableData {
  key: React.Key;
  name: string;
  pointOne: number[];
  pointTwo: number[];
  pointThree: number[];
}

export interface IRoutesState {
  routes: ITableData[];
  chosenRoute: ITableData | null;
}

export interface IPoints {
  geocode: L.LatLng;
  popUp: string;
}
