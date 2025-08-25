// src/components/Hero.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsCloudSun } from 'react-icons/bs';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animation shortly after the component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="container mx-auto px-6 pt-16 pb-24 text-center">
      <div 
        className={`flex flex-col items-center transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="p-8 bg-blue-100 rounded-2xl mb-8 inline-block shadow-sm">
          <BsCloudSun className="text-8xl text-yellow-400 opacity-80" />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-600 mb-4">
          Welcome to Weatherly
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Your trusted source for accurate, up-to-date weather forecasts worldwide.
        </p>
        <Link to="/forecast">
          <button className="px-8 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg transition-all duration-300 ease-in-out shadow-md hover:bg-green-600 hover:shadow-lg hover:scale-105">
            Explore Forecasts
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Hero;