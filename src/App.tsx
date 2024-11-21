// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import HomePage from "./pages/HomePage";
import Pilares from "./pages/Pilares";
import PageTitle from "./components/App/PageTitle";
import  Contact  from "./pages/Contact";
//import Activity from "./pages/Activity";

// Mantener el orden, ty

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta del Home */}
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <PageTitle title="The Begin" />
            </>
          }
        />
        {/* Ruta del Marketplace */}
        <Route
          path="/marketplace"
          element={
            <>
              <Marketplace />
              <PageTitle title="Marketplace" />
            </>
          }
        />
        {/* Ruta del Trueque */}
        <Route
          path="/trueque"
          element={
            <>
              <Marketplace />
              <PageTitle title="Trueque" />
            </>
          }
        />
        {/* Ruta Pilares-info */}
        <Route
          path="/pilares"
          element={
            <>
              <Pilares />
              <PageTitle title="Pilares" />
            </>
          }
        />
        {/* Ruta contacto*/}
        <Route
          path="/contacto"
          element={
            <>
              <Contact />
              <PageTitle title="Contact" />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
