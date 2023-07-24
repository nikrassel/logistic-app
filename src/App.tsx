import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./page/AboutPage";
import RoutesPage from "./page/RoutesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RoutesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
