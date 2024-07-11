import React from 'react';
import { Carousel } from "@material-tailwind/react";


const HoverCard = ({ plane, show, handleClose }) => (
  <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${show ? 'block' : 'hidden'}`}>
    <div className="bg-white p-8 rounded-lg shadow-lg relative w-11/12 md:w-3/4 lg:w-2/3">
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-4">{plane.name}</h2>
      <p className="text-gray-700 mb-4">{plane.description}</p>
      <Carousel className="rounded-xl ">
        {plane.moreImages.map((image, index) => (
          <div  key={index} className="overflow-hidden relative h-full w-full">
           <img src={image} alt="image 1" className="h-96 hover:h-full w-full object-cover overflow-y-scroll" />
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);

export default HoverCard;
