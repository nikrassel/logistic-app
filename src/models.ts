export interface ITableData {
  key: React.Key;
  name: string;
  pointOne: string;
  pointTwo: string;
  pointThree: string;
}

export interface IRoutesState {
  routes: ITableData[];
  chosenRoute: ITableData | null;
}
