// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
// These paths assume App.jsx is in src/ and the pages are in src/pages/
import LandingPage from './pages/LandingPage';
import ForecastPage from './pages/ForecastPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/forecast" element={<ForecastPage />} />
      <Route path="/details/:city" element={<DetailsPage />} />
    </Routes>
  );
}

export default App;