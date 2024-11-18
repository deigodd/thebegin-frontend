// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import HomePage from "./pages/HomePage";
import PageTitle from "./components/App/PageTitle";
import TheBegin from "./pages/TheBeginPage"
import Login from "./pages/Login";

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
        {/* Ruta del TheBegin */}
        <Route
          path="/the-begin"
          element={
            <>
              <TheBegin />
              <PageTitle title="The Begin" />
        {/* Ruta del Login */}
        <Route
          path="/login"
          element={
            <>
              <Login />
              <PageTitle title="Iniciar Sesión" />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
