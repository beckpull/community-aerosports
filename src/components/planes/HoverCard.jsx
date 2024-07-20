import React from 'react';
import { Carousel } from "@material-tailwind/react";


const HoverCard = ({ plane, show, handleClose }) => (
  <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ${show ? 'block' : 'hidden'}`}>
    <div className="bg-white rounded-lg shadow-lg relative max-w-4xl mx-4 max-h-[80vh] overflow-auto p-6 pt-12">
      <button
        onClick={handleClose}
        className="absolute top-3  right-3 border-2 border-gray-500 p-2 rounded hover:border-gray-600 hover:bg-gray-100 text-gray-500 hover:text-gray-700 text-xl"
      >
        &times;
      </button>
      <h2 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }} className="text-mainBlue500 text-lg md:text-2xl uppercase font-bold mb-4">{plane.name}</h2>
      <p className="text-gray-700 mb-3 text-sm md:text-base">{plane.description}</p>
      <Carousel className="rounded-xl ">
        {plane.moreImages.map((image, index) => (
          <div  key={index} className="overflow-hidden relative h-full w-full carousel-slide">
           <img src={image} alt="image 1" className="h-96 w-full object-cover" />
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);

export default HoverCard;
