// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Marketplace from './pages/Marketplace';
import Profile1 from './pages/Profile1';
import Profile2 from './pages/Profile2';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/profile1" element={<Profile1 />} />
        <Route path="/profile2" element={<Profile2 />} />
      </Routes>
    </Router>
  );
};

export default App;
