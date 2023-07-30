import { ITableData } from "../models";

export default function getPointsForRequest(route: ITableData) {
  const points = route.points.map((item) => [item[1], item[0]]);
  return points.join(";");
}
