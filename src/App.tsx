// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Marketplace from './pages/Marketplace';
import PageTitle from './components/App/PageTitle';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
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
