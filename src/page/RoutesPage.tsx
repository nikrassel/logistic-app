import React from "react";
import "./index.css";
import RoutesTable from "../components/RoutesTable";
import MapComponent from "../components/MapComponent";

const RoutesPage = () => {
  return (
    <div className="main-content">
      <RoutesTable />
      <div className="map-container">
        <MapComponent />
      </div>
    </div>
  );
};

export default RoutesPage;
