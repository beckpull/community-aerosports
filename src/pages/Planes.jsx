import React, { useState } from 'react';
import PlaneCard from '@/components/planes/PlaneCard';
import HoverCard from '@/components/planes/HoverCard';

import rusty1 from '@/assets/images/rusty-182k/rusty1.png';
import rusty2 from '@/assets/images/rusty-182k/rusty2.png';
import rusty3 from '@/assets/images/rusty-182k/rusty3.png';
import rusty4 from '@/assets/images/rusty-182k/rusty4.png';
import rusty5 from '@/assets/images/rusty-182k/rusty5.png';

import dusty1 from '@/assets/images/dusty-172h/dusty1.png';
import dusty2 from '@/assets/images/dusty-172h/dusty2.png';
import dusty3 from '@/assets/images/dusty-172h/dusty3.png';
import dusty4 from '@/assets/images/dusty-172h/dusty4.png';
import dusty5 from '@/assets/images/dusty-172h/dusty5.png';
import dusty6 from '@/assets/images/dusty-172h/dusty6.png';

import red1 from '@/assets/images/red/red1.png';
import red2 from '@/assets/images/red/red2.png';
import red3 from '@/assets/images/red/red3.png';
import red4 from '@/assets/images/red/red4.png';
import red5 from '@/assets/images/red/red5.png';
import red6 from '@/assets/images/red/red6.png';
import red7 from '@/assets/images/red/red7.png';
import red8 from '@/assets/images/red/red8.png';
import red9 from '@/assets/images/red/red9.png';

const planes = [
  {
    name: 'Rusty',
    type: '1967 Cessna 182K',
    image: rusty1,
    description: "My name is Rusty. I was born in Wichita, Kansas in 1967. I presently fly on aerial survey missions and Instrument training flights. My panel, as you can see in my profile picture, has been updated for training purposes.",
    moreImages: [rusty2, rusty3, rusty4, rusty5]
  },
  {
    name: 'Dusty',
    type: '1967 Cessna 172H',
    image: dusty1,
    description: "My name is Dusty. I was born in Wichita, Kansas in 1967. I like helping beginning students learn to fly. I only have 145 horse power but it's a very smooth running engine. For years I had no name. My previous owner had a grandson who decided that I should be called Dusty. Now that I'm living in New Mexico my name feels very appropriate.",
    moreImages: [dusty2, dusty3, dusty4, dusty5, dusty6]
  },
  {
    name: 'Red',
    type: 'RedBird LD Simulator',
    image: red1,
    description: "My name is Red. I help advanced students learn proper instrument procedures to propel them into their flying careers. Sometimes, they call me other names that I don't like. It's ok because after 20 hours with me, they begin to understand the complexity of professional flying.",
    moreImages: [red2, red3, red4, red5, red6, red7, red8, red9]
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
    <div className="flex flex-col items-center p-4 space-y-4">
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
