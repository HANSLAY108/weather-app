// src/components/DetailCard.jsx

import React from 'react';

const DetailCard = ({ icon, title, value, description }) => {
  return (
    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm flex items-start gap-4">
      <div className="text-3xl text-green-600">{icon}</div>
      <div>
        <h3 className="text-gray-600">{title}</h3>
        <p className="text-2xl font-bold text-gray-800 my-1">{value}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default DetailCard;