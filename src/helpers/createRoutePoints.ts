import { IRoute } from "../models";
import L from "leaflet";

export default function createRoutePoints(points: IRoute) {
  return [
    {
      geocode: new L.LatLng(points.pointOne[0], points.pointOne[1]),
      popUp: "Точка 1",
    },
    {
      geocode: new L.LatLng(points.pointTwo[0], points.pointTwo[1]),
      popUp: "Точка 2",
    },
    {
      geocode: new L.LatLng(points.pointThree[0], points.pointThree[1]),
      popUp: "Точка 3",
    },
  ];
}
