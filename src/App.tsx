// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Marketplace from './pages/Marketplace';
import Profile from './pages/Profile';
import Profile2 from './pages/Profile2';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/profile1" element={<Profile />} />
        <Route path="/profile2" element={<Profile2 />} />
      </Routes>
    </Router>
  );
};

export default App;
