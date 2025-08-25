// src/pages/DetailsPage.jsx

import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { IoSparkles, IoSearch, IoWaterOutline, IoEyeOutline, IoSunnyOutline, IoCloudyOutline, IoArrowBack } from 'react-icons/io5';
import { FiWind, FiSunrise, FiSunset, FiCloudRain } from 'react-icons/fi';
import { BsSpeedometer2 } from 'react-icons/bs';
import DetailCard from '../components/DetailCard';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const DetailsPage = () => {
  const { city } = useParams();
  const location = useLocation();
  const { dayData } = location.state || {}; // Data passed from the forecast card

  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Could not fetch weather details.");
        const data = await response.json();
        setDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [city]);

  // Helper functions to format data
  const formatTime = (timestamp) => new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const windKmh = details ? (details.wind.speed * 3.6).toFixed(1) : 0;
  const visibilityKm = details ? (details.visibility / 1000).toFixed(1) : 0;

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400 text-white">Loading details...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center bg-red-200 text-red-800">{error}</div>;

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-br from-blue-200 to-blue-400 p-4 sm:p-6 md:p-8">
      <header className="container mx-auto flex justify-between items-center mb-8">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <IoSparkles className="text-3xl text-white" />
          <span className="text-2xl font-bold text-white">Weatherly</span>
        </Link>
        {/* We can re-add search here if needed */}
      </header>

      <main className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Weather Details for <span className="capitalize">{city}</span></h1>
          <Link to="/forecast" className="flex items-center gap-2 text-white font-semibold hover:underline">
            <IoArrowBack />
            Back to Forecast
          </Link>
        </div>

        {details && dayData && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <DetailCard icon={<IoWaterOutline />} title="Humidity" value={`${details.main.humidity}%`} description="Feeling quite humid today." />
              <DetailCard icon={<FiWind />} title="Wind Speed" value={`${windKmh} km/h`} description="Moderate breeze from the west." />
              <DetailCard icon={<BsSpeedometer2 />} title="Pressure" value={`${details.main.pressure} hPa`} description="Stable atmospheric pressure." />
              <DetailCard icon={<FiCloudRain />} title="Chance of Rain" value={`${Math.round(dayData.pop * 100)}%`} description="Very slight possibility of showers." />
              <DetailCard icon={<IoSunnyOutline />} title="UV Index" value="4 (Moderate)" description="Sun protection recommended." />
              <DetailCard icon={<IoEyeOutline />} title="Visibility" value={`${visibilityKm} km`} description="Clear and expansive views." />
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold mb-4">Astronomy</h2>
              <div className="flex justify-around items-center text-center">
                <div className="flex flex-col items-center">
                  <FiSunrise className="text-4xl text-yellow-500 mb-2"/>
                  <p className="text-gray-600">Sunrise</p>
                  <p className="text-2xl font-bold">{formatTime(details.sys.sunrise)}</p>
                </div>
                <div className="flex flex-col items-center">
                  <FiSunset className="text-4xl text-orange-500 mb-2"/>
                  <p className="text-gray-600">Sunset</p>
                  <p className="text-2xl font-bold">{formatTime(details.sys.sunset)}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default DetailsPage;