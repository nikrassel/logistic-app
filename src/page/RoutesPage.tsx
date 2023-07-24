import React from "react";
import "./index.css";
import RoutesTable from "../components/RoutesTable";

const RoutesPage = () => {
  return (
    <div className="main-content">
      <RoutesTable />
      <div>Map place</div>
    </div>
  );
};

export default RoutesPage;
