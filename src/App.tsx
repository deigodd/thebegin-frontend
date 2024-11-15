// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Marketplace from './pages/Marketplace';
import PageTitle from './components/App/PageTitle';
import Activity from './pages/Activity';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
    </Router>
  );
};

export default App;
