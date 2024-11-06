// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Marketplace from './pages/Marketplace';
import HomePage from './pages/HomePage';
import PageTitle from './components/App/PageTitle';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <HomePage />
            <PageTitle title="The Begin" />
          </>
        } />
        <Route path="/marketplace" element={
          <>
            <Marketplace />
            <PageTitle title="Marketplace" />
          </>
        } />
      </Routes>
    </Router>
  );
};

export default App;
