import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./index.css";

const MapComponent = () => {
  const centerPoint: number[] = [59.84660399, 30.29496392];
  return (
    <>
      {/* @ts-ignore */}
      <MapContainer center={centerPoint} zoom={13}>
        <TileLayer
          // @ts-ignore
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  );
};

export default MapComponent;
