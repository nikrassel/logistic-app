import React from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
} from "react-leaflet";
import L, { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useAppSelector } from "../hooks/storeHooks";
import { IRoute } from "../models";
import { RootState } from "../store/createStore";
import toLatLng from "../helpers/toLatLng";
import createRoutePoints from "../helpers/createRoutePoints";
import AutoRecenter from "./AutoRecenter";
import "leaflet/dist/leaflet.css";
import "./index.css";

const MapComponent = () => {
  const centerPoint = new L.LatLng(59.938955, 30.315644);
  const chosenRoute: IRoute | null = useAppSelector(
    (state: RootState) => state.routesReducer.chosenRoute
  );
  const OSRMRoute = useAppSelector(
    (state: RootState) => state.routesReducer.OSRMRoute
  );
  const customIcon = new Icon({
    iconUrl: require(".//img/placeholder.png"),
    iconSize: [38, 38],
  });
  return (
    <>
      <MapContainer center={centerPoint} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
          {chosenRoute &&
            createRoutePoints(chosenRoute).map((point, index) => (
              <Marker position={point.geocode} icon={customIcon} key={index}>
                <Popup>{point.popUp}</Popup>
              </Marker>
            ))}
        </MarkerClusterGroup>
        {OSRMRoute && <Polyline positions={toLatLng(OSRMRoute)} color="red" />}
        {chosenRoute && (
          <AutoRecenter routePoints={createRoutePoints(chosenRoute)} />
        )}
      </MapContainer>
    </>
  );
};

export default MapComponent;
