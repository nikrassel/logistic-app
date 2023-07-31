import L from "leaflet";
import { IRoute } from "../models";

export default function createRoutePoints(points: IRoute) {
  const routePoints = points.points.map((item, index) => {
    return {
      geocode: new L.LatLng(item[0], item[1]),
      popUp: `Точка ${index + 1}`,
    };
  });
  return routePoints;
}
