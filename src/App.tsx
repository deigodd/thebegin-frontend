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
<<<<<<< Updated upstream
=======
        <Route path="/" element={<Marketplace />} />
        <Route path="/highlights" element={<Highlight />} />
        <Route path="/Activity" element={<Activity />} />
>>>>>>> Stashed changes
        <Route path="/" element={
          <>
            <Marketplace />
            <PageTitle title="Marketplace" />
<<<<<<< Updated upstream
=======
            <Highlight />
            <PageTitle title="Highlight" />
            <Activity />
            <PageTitle title="Activity" />
>>>>>>> Stashed changes
          </>
        } />
      </Routes>
    </Router>
  );
};

export default App;
