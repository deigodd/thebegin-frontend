// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Marketplace from './pages/Marketplace';
import Profile1 from './pages/Profile1';
import PageTitle from './components/App/PageTitle';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path='/profile' element={<Profile1/>} />
      </Routes>
    </Router>
  );
};

export default App;
