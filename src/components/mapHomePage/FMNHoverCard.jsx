import React from 'react';

const HoverCard = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg overflow-auto max-h-[70%] w-[70%] relative">
        <button
          className="absolute top-2 right-2 text-black"
          onClick={onClose}
        >
          ✖
        </button>
        <img src={image} alt="Detailed view" className="w-full mb-4" />
      </div>
    </div>
  );
};

export default HoverCard;