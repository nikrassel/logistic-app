import { ITableData } from "../models";

export default function getPointsForRequest(route: ITableData) {
  const points = `${route.pointOne[1]},${route.pointOne[0]};${route.pointTwo[1]},${route.pointTwo[0]};${route.pointThree[1]},${route.pointThree[0]}`;
  return points;
}
