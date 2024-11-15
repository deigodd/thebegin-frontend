// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import HomePage from "./pages/HomePage";
import PageTitle from "./components/App/PageTitle";
import Profile from "./pages/Profile1";
import Profile2 from "./pages/Profile2";
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
        {/* Ruta del Profile */}
        <Route
          path="/profile"
          element={
            <>
              <Profile/>
              <PageTitle title="Profile" />
            </>
          }
        />
        {/* Ruta del Profile2 */}
        <Route
          path="/profile2"
          element={
            <>
              <Profile2/>
              <PageTitle title="ProfileVegan" />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
