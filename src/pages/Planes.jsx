// src/App.js
import React, { useState } from 'react';
import PlaneCard from '@/components/planes/PlaneCard';
import HoverCard from '@/components/planes/HoverCard';

const planes = [
  {
    name: 'Rusty',
    type: '1967 Cessna 182K',
    image: '@/assets/images/rusty-182k/rusty1.png', 
    description: "My name is Rusty. I was born in Wichita, Kansas in 1967. I presently fly on aerial survey missions and Instrument training flights. My panel, as you can see in my profile picture, has been updated for training purposes.",
    moreImages: ['@/assets/images/rusty-182k/rusty2.png', '@/assets/images/rusty-182k/rusty3.png', '@/assets/images/rusty-182k/rusty4.png', '@/assets/images/rusty-182k/rusty5.png']
  },
  {
    name: 'Dusty',
    type: '1967 Cessna 172H',
    image: '@/assets/images/dusty-172h/dusty1.png', 
    description: "My name is Dusty. I was born in Wichita, Kansas in 1967. I like helping beginning students learn to fly. I only have 145 horse power but it's a very smooth running engine. For years I had no name. My previous owner had a grandson who decided that I should be called Dusty. Now that I'm living in New Mexico my name feels very appropriate.",
    moreImages: ['@/assets/images/dusty-172h/dusty2.png', '@/assets/images/dusty-172h/dusty3.png', '@/assets/images/dusty-172h/dusty4.png', '@/assets/images/dusty-172h/dusty5.png', '@/assets/images/dusty-172h/dusty6.png']
  },
  {
    name: 'Red',
    type: 'RedBird LD Simulatpr',
    image: '@/assets/images/red/red1.png',
    description: "My name is Red. I help advanced students learn proper instrument procedures to propel them into their flying careers. Sometimes, they call me other names that I don't like. It's ok because after 20 hours with me, they begin to understand the complexity of professional flying.",
    moreImages: ['@/assets/images/red/red2.png', '@/assets/images/red/red3.png', '@/assets/images/red/red4.png', '@/assets/images/red/red5.png', '@/assets/images/red/red6.png', '@/assets/images/red/red7.png', '@/assets/images/red/red8.png', '@/assets/images/red/red9.png']
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
