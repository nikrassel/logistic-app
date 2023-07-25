import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L, { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useAppSelector } from "../hooks/storeHooks";
import { getChosenRoute } from "../store/routesReducer";
import "leaflet/dist/leaflet.css";
import "./index.css";
import { IRoute, IPoints } from "../models";

const MapComponent = () => {
  const centerPoint = new L.LatLng(59.938955, 30.315644);
  const chosenRoute: IRoute | null = useAppSelector(getChosenRoute());
  let routePoints: IPoints[] | undefined;
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
  const RecenterAutomatically = () => {
    const map = useMap();
    useEffect(() => {
      if (chosenRoute) {
        const lat =
          (chosenRoute.pointOne[0] +
            chosenRoute.pointTwo[0] +
            chosenRoute.pointThree[0]) /
          3;
        const lng =
          (chosenRoute.pointOne[1] +
            chosenRoute.pointTwo[1] +
            chosenRoute.pointThree[1]) /
          3;
        const newCenter = new L.LatLng(lat, lng);
        map.setView(newCenter);
      }
    }, [map]);
    return null;
  };
  return (
    <>
      <MapContainer center={centerPoint} zoom={12}>
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
        <RecenterAutomatically />
      </MapContainer>
    </>
  );
};

export default MapComponent;
