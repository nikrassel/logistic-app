import React from "react";
import { Route, Routes } from "react-router-dom";
import RoutesPage from "./page/RoutesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RoutesPage />} />
      </Routes>
    </>
  );
}

export default App;
