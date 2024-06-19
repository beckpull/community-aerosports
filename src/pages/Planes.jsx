// src/App.js
import React, { useState } from 'react';
import PlaneCard from '@/components/planes/PlaneCard';
import HoverCard from '@/components/planes/HoverCard';

const planes = [
  {
    name: 'Plane 1',
    type: 'Type A',
    image: 'https://via.placeholder.com/150', // Replace with your image links
    description: 'Description of Plane 1',
    moreImages: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150']
  },
  {
    name: 'Plane 2',
    type: 'Type B',
    image: 'https://via.placeholder.com/150', // Replace with your image links
    description: 'Description of Plane 2',
    moreImages: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150']
  },
  {
    name: 'Plane 3',
    type: 'Type C',
    image: 'https://via.placeholder.com/150', // Replace with your image links
    description: 'Description of Plane 3',
    moreImages: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150']
  }
];

const Planes = () => {
  const [selectedPlane, setSelectedPlane] = useState(null);
  const [show, setShow] = useState(false);

  const handleCardClick = (plane) => {
    setSelectedPlane(plane);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className="flex flex-wrap justify-around p-4">
      {planes.map((plane, index) => (
        <PlaneCard key={index} plane={plane} onCardClick={handleCardClick} />
      ))}
      {selectedPlane && (
        <HoverCard plane={selectedPlane} show={show} handleClose={handleClose} />
      )}
    </div>
  );
};

export default Planes;
