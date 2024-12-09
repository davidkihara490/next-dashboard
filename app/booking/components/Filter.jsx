"use client"

import React, { useState } from 'react';

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    "5-7 seats", "SUV", "Small Car", "Medium Car", "Luxury", "Mid-Size SUV",
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-full md:w-1/4 p-4 bg-white rounded-lg shadow-lg pt-4">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Filter By</h2>

      {/* Rental Type */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Rental Type</h3>
        <select className="w-full p-2 border border-gray-300 rounded-lg">
          <option>Self Drive</option>
          <option>With Driver</option>
        </select>
      </div>

      {/* Categories */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Categories</h3>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={`py-1 px-3 rounded-lg text-sm text-gray-700 ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Price Range</h3>
        <input type="range" min="0" max="50000" className="w-full" />
        <div className="flex justify-between text-sm text-gray-700">
          <span>KES 0</span>
          <span>KES 50,000</span>
        </div>
      </div>

      {/* Refundable Security Deposit */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Refundable Security Deposit</h3>
        <select className="w-full p-2 border border-gray-300 rounded-lg">
          <option>All</option>
          <option>Not Required</option>
          <option>Required</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
