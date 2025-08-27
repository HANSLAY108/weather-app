// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header'; // <-- Must be capital H
import Hero from '../components/Hero';     // <-- Must be capital H
import Features from '../components/Features'; // <-- Must be capital F
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/forecast" element={<ForecastPage />} />
    </Routes>
  );
}

export default App;
