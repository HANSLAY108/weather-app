// src/pages/LandingPage.jsx

import React from 'react';
import Header from '../components/header';
import Hero from '../components/Hero';
import Features from '../components/Features';

function LandingPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-gray-800">
      <Header />
      <Hero />
      <Features />
    </div>
  );
}

export default LandingPage;