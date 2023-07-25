import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L, { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useAppSelector } from "../store/createStore";
import { getChosenRoute } from "../store/routesReducer";
import "leaflet/dist/leaflet.css";
import "./index.css";
import { ITableData } from "../models";

const MapComponent = () => {
  const chosenRoute: ITableData | null = useAppSelector(getChosenRoute());
  let routePoints;
  if (chosenRoute) {
    routePoints = [
      {
        geocode: new L.LatLng(chosenRoute.pointOne[0], chosenRoute.pointOne[1]),
        popUp: "Точка 1",
      },
      {
        geocode: new L.LatLng(chosenRoute.pointTwo[0], chosenRoute.pointTwo[1]),
        popUp: "Точка 2",
      },
      {
        geocode: new L.LatLng(
          chosenRoute.pointThree[0],
          chosenRoute.pointThree[1]
        ),
        popUp: "Точка 3",
      },
    ];
  }
  const customIcon = new Icon({
    iconUrl: require(".//img/placeholder.png"),
    iconSize: [38, 38],
  });
  const centerPoint = new L.LatLng(59.84660399, 30.29496392);
  return (
    <>
      <MapContainer center={centerPoint} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
          {chosenRoute &&
            routePoints?.map((point, index) => (
              <Marker position={point.geocode} icon={customIcon} key={index}>
                <Popup>{point.popUp}</Popup>
              </Marker>
            ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
};

export default MapComponent;
