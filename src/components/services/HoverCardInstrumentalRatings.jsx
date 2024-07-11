import React from 'react';

const HoverCardInstrumentalRatings = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Instrumental Rating Requirements</h2>
        <p className="text-gray-700">
          Here are the requirements for the Instrumental Ratings...
        </p>
      </div>
    </div>
  );
};

export default HoverCardInstrumentalRatings;