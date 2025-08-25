// src/components/ForecastCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const ForecastCard = ({ data, city }) => {
  // Convert the API timestamp to a readable date
  const date = new Date(data.dt * 1000);
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
  const monthAndDay = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return (
    // Wrap the card in a Link to make it navigable
    <Link to={`/details/${city}`} state={{ dayData: data }}>
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col items-center text-center text-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer h-full">
        <h3 className="text-xl font-bold">{dayOfWeek}</h3>
        <p className="text-gray-500 mb-2">{monthAndDay}</p>
        <img 
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
          alt={data.weather[0].description}
          className="w-20 h-20"
        />
        <p className="capitalize mb-4">{data.weather[0].description}</p>
        <div className="mt-auto">
            <p className="text-lg font-semibold text-green-600">High: {Math.round(data.main.temp_max)}°C</p>
            <p className="text-md text-gray-600">Low: {Math.round(data.main.temp_min)}°C</p>
        </div>
      </div>
    </Link>
  );
};

export default ForecastCard;