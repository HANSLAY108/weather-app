// src/pages/ForecastPage.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoSparkles, IoSearch } from 'react-icons/io5';
import ForecastCard from '../components/ForecastCard';

// Your API Key from the .env.local file
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const ForecastPage = () => {
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState('London'); // Default city as shown in the image
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchForecast = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('City not found. Please try another search.');
        }
        
        const data = await response.json();
        
        // The API returns data every 3 hours. We filter it to get one forecast per day.
        const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00"));
        setForecastData(dailyForecasts);
      } catch (err) {
        setError(err.message);
        setForecastData(null); // Clear old data on error
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [city]); // This effect re-runs every time the 'city' state changes

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setCity(searchTerm.trim());
      setSearchTerm(''); // Clear input after search
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-br from-blue-200 to-blue-400 p-4 sm:p-6 md:p-8">
      <header className="container mx-auto flex justify-between items-center mb-8">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <IoSparkles className="text-3xl text-white" />
          <span className="text-2xl font-bold text-white">Weatherly</span>
        </Link>
        <form onSubmit={handleSearch} className="relative">
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a city..." 
            className="pl-10 pr-4 py-2 w-48 sm:w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </form>
      </header>

      <main className="container mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          5-Day Forecast for <span className="capitalize">{city}</span>
        </h1>
        
        {loading && <p className="text-white text-lg">Loading forecast...</p>}
        {error && <p className="text-red-200 bg-red-800/50 p-3 rounded-lg">{error}</p>}
        
        {forecastData && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {forecastData.map((day, index) => (
              // Pass both 'day' data and the 'city' name to each card
              <ForecastCard key={index} data={day} city={city} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default ForecastPage;