import React from "react";
import "./index.css";
import RoutesTable from "../components/RoutesTable";
import MapComponent from "../components/MapComponent";
import ErrorMessage from "../components/ErrorMessage";

const RoutesPage = () => {
  return (
    <>
      <ErrorMessage />
      <div className="main-content">
        <div className="table-container">
          <RoutesTable />
        </div>
        <div className="map-container">
          <MapComponent />
        </div>
      </div>
    </>
  );
};

export default RoutesPage;
