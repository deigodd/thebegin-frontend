// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MembershipPage from './pages/Membership';
import TheBeginProps from './pages/TheBegin';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/thebegin" element={<TheBeginProps />} />
      </Routes>
    </Router>
  );
};

export default App;
