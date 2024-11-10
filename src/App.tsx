// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Marketplace from './pages/Marketplace';
import HomePage from './pages/HomePage';
import PageTitle from './components/App/PageTitle';
import Activity from './pages/Activity';
import Highlight from './pages/Highlight';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/highlights" element={<Highlight />} />
        <Route path="/Activity" element={<Activity />} />
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
            <Highlight />
            <PageTitle title="Highlight" />
            <Activity />
            <PageTitle title="Activity" />
          </>
        } />
      </Routes>
    </Router>
  );
};

export default App;
