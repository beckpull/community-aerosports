// src/components/planes/PlaneCard.js
import React from 'react';

const PlaneCard = ({ plane, onCardClick }) => (
  <div
    className="relative w-full md:w-5/12 lg:w-3/12 m-4 cursor-pointer overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
    onClick={() => onCardClick(plane)}
  >
    <img
      src={plane.image}
      alt={plane.name}
      className="w-full h-48 object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-4">
      <h2 className="text-white text-lg font-bold">{plane.name}</h2>
      <p className="text-white">{plane.type}</p>
    </div>
  </div>
);

export default PlaneCard;
