// src/components/Features.jsx

import React from 'react';
import { BsCloudSun, BsCalendarDate } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { useInView } from 'react-intersection-observer';

const FeatureCard = ({ icon, title, description, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.1,    // Trigger when 10% of the card is visible
  });

  const delay = index * 200; // Staggered delay: 0ms, 200ms, 400ms

  return (
    <div
      ref={ref}
      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-700 ease-out"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      <div className="text-4xl text-green-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const featureData = [
    { icon: <BsCloudSun />, title: 'Real-time Updates', description: 'Get instant weather conditions for your exact location, updated every minute.' },
    { icon: <BsCalendarDate />, title: 'Daily & Hourly Forecasts', description: 'Plan your day or week with detailed predictions, including temperature, humidity, and wind.' },
    { icon: <IoLocationOutline />, title: 'Global Coverage', description: 'Access accurate weather data for cities and regions across the globe.' },
  ];

  return (
    <section className="container mx-auto px-6 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featureData.map((feature, index) => (
          <FeatureCard key={index} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Features;