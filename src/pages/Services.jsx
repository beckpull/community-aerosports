import React, { useState } from 'react';
import LocationMap from '@/components/services/SvsMap';
import HoverCardPrivatePilot from '@/components/services/HoverCardPrivatePilot';
import HoverCardInstrumentalRatings from '@/components/services/HoverCardInstrumentalRatings';

function Services() {
  const [hoverCard, setHoverCard] = useState(null);

  const handleLearnMoreClick = (cardType) => {
    setHoverCard(cardType);
  };

  const handleCloseHoverCard = () => {
    setHoverCard(null);
  };

  const Card = ({ children }) => (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full">
      {children}
    </div>
  );

  return (
    <>
      {hoverCard === 'PrivatePilot' && (
        <HoverCardPrivatePilot onClose={handleCloseHoverCard} />
      )}
      {hoverCard === 'InstrumentalRatings' && (
        <HoverCardInstrumentalRatings onClose={handleCloseHoverCard} />
      )}

      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
        <div className="max-w-4xl w-full">
          {/* Private Pilot License */}
          <Card>
            <h2 className="text-2xl font-bold mb-4">Private Pilot License</h2>
            <p className="text-gray-600">Learn to fly and obtain your Private Pilot License with our comprehensive training program.</p>
            <button 
              className="text-blue-500 hover:underline mt-4"
              onClick={() => handleLearnMoreClick('PrivatePilot')}
            >
              Learn More
            </button>
          </Card>

          {/* Instrumental Ratings */}
          <Card>
            <h2 className="text-2xl font-bold mb-4">Instrumental Ratings</h2>
            <p className="text-gray-600">Enhance your flying skills with our Instrument Rating training.</p>
            <button 
              className="text-blue-500 hover:underline mt-4"
              onClick={() => handleLearnMoreClick('InstrumentalRatings')}
            >
              Learn More
            </button>
          </Card>

          {/* Pricing Information */}
          <Card>
            <h2 className="text-2xl font-bold mb-4">Airplanes & Costs</h2>
            <p className="text-gray-600">
              Airplanes: <br />
              - 1967 Cessna 182K <br />
              - 1967 Cessna 172H <br />
              - RedBird LD Simulator <br />
            </p>
            <p className="text-gray-600 mt-4">
              Costs: <br />
              - 172: $140/ hour <br />
              - 182: $180/ hour <br />
              - RedBird Simulator: $75/ hour <br />
            </p>
            <p className="text-gray-600 mt-4">
              All instruction: $75/ hour
            </p>
          </Card>

          {/* Placeholder for Map Component */}
          <Card>
            <h2 className="text-2xl font-bold mb-4">Training Ground Map</h2>
            <LocationMap />
          </Card>
        </div>
      </div>
    </>
  );
}

export default Services;