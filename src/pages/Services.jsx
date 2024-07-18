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
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full flex flex-col items-center">
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

      <div className="min-h-screen bg-black flex flex-col items-center p-8">
        <div className="max-w-4xl w-full">
          {/* Private Pilot License */}
          <Card>
            <h2 className="text-2xl text-center font-bold mb-4">Private Pilot License</h2>
            <p className="text-center text-gray-600">Learn to fly and obtain your Private Pilot License with our comprehensive training program.</p>
            <p className="text-center text-gray-600"><i>20 hours flight time with instructor (minumum)</i></p>
            <div className="flex justify-center mt-4">
              <button 
                className="text-blue-500 hover:underline text-sm"
                onClick={() => handleLearnMoreClick('PrivatePilot')}
              >
                <i>Learn More - FAA requirements</i>
              </button>
            </div>
          </Card>

          {/* Instrumental Ratings */}
          <Card>
            <h2 className="text-2xl text-center font-bold mb-4">Instrumental Ratings</h2>
            <p className="text-center text-gray-600">Enhance your flying skills with our Instrument Rating training.</p>
            <p className="text-center text-gray-600"><i>20 hours flight time, 20 hours on Redbird simulator (minumum)</i></p>
            <div className="flex justify-center mt-4">
              <button 
                className="text-blue-500 hover:underline text-sm"
                onClick={() => handleLearnMoreClick('InstrumentalRatings')}
              >
                <i>Learn More - FAA requirements</i>
                </button>
            </div>
          </Card>

          {/* Pricing Information */}
          <Card>
            <h2 className="text-2xl text-center font-bold mb-4">Airplanes & Costs</h2>
            <p className="text-center text-gray-600">
              Available Airplanes: <br />
              - 1967 Cessna 182K: $140/ hour <br />
              - 1967 Cessna 172H: $180/ hour <br />
              - RedBird LD Simulator: $75/ hour <br />
            </p>
            <p className="text-center text-gray-600 mt-4">
              All instruction: $75/ hour
            </p>
          </Card>

          {/* Placeholder for Map Component */}
          <Card>
            <h2 className="text-2xl text-center font-bold mb-4">Training Grounds</h2>
            <p className="lg:text-xl md:text-lg text-center sm:text-base mt-4 ml-2 mr-2 mb-4">
              Farmington offers an exceptional learning environment, with its unique climate providing varied flying conditions that prepare students for any situation. The proximity to Durango, CO, offers the added advantage of "mountain training", allowing you to master the skills needed for navigating mountainous terrain.
            </p>
            <LocationMap />
          </Card>
        </div>
      </div>
    </>
  );
}

export default Services;