// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import Trueque from "./pages/Trueque";
import HomePage from "./pages/HomePage";
import Pilares from "./pages/Pilares";
import PageTitle from "./components/App/PageTitle";
import  Contact  from "./pages/Contact";
import TheBegin from "./pages/TheBeginPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Tecito from "./pages/Tecito";

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
              <Trueque />
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
        {/* Ruta del TheBegin */}
        <Route
          path="/the-begin"
          element={
            <>
              <TheBegin />
              <PageTitle title="The Begin" />
            </>
          }
        />
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
        {/* Ruta del Register */}
        <Route
          path="/Register"
          element={
            <>
              <Register />
              <PageTitle title="Registrate" />
            </>
          }
        />
        {/* Ruta del Tecito */}
        <Route
          path="/tecito"
          element={
            <>
              <Tecito />
              <PageTitle title="Tecito" />
            </>
          }
        />
        {/* RUTA CONTROLADORA -> Redirige al 404 */}
        <Route
          path="/*"
          element={
            <>
              <NotFound />
              <PageTitle title="404 - Página no encontrada" />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
