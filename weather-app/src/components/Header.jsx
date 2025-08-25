// src/components/Header.jsx

import React from 'react';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';
import { IoSparkles } from 'react-icons/io5';

const Header = () => {
  return (
    <header className="py-4 px-6 md:px-12">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <IoSparkles className="text-3xl text-green-500" />
          <span className="text-2xl font-bold text-green-500">Weatherly</span>
        </div>
       
      </div>
    </header>
  );
};

export default Header;