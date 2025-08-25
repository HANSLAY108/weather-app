// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // We'll create this next
import ForecastPage from './pages/ForecastPage'; // And this one

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/forecast" element={<ForecastPage />} />
    </Routes>
  );
}

export default App;