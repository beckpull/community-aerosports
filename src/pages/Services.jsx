import React from 'react';
import LocationMap from '@/components/mapHomePage/map';

function Services() {

  const Card = ({ children }) => (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4">
      {children}
    </div>
  );

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Placeholder for Private Pilot License */}
          <Card>
            <h2 className="text-xl font-bold mb-4">Private Pilot License</h2>
            <p className="text-gray-600">Content goes here...</p>
          </Card>

          {/* Placeholder for Instrumental Ratings */}
          <Card>
            <h2 className="text-xl font-bold mb-4">Instrumental Ratings</h2>
            <p className="text-gray-600">Content goes here...</p>
          </Card>

          {/* Pricing Information */}
          <Card>
            <h2 className="text-xl font-bold mb-4">Airplanes & Costs</h2>
            <p className="text-gray-600">
              Airplanes: <br />
              - 1967 Cessna 182K <br />
              - 1967 Cessna 172H <br />
              - RedBird LD Simulator <br />
            </p>
            <p className="text-gray-600">
              Costs: <br />
              - 172: $140/ hour <br />
              - 182: $180/ hour <br />
              - RedBird Simulator: $75/ hour <br />
            </p>
            <p className="text-gray-600">
              All instruction: $75/ hour
            </p>
          </Card>

          {/* Placeholder for Map Component */}
          <Card>
            <h2 className="text-xl font-bold mb-4">Training Ground Map</h2>
            <LocationMap />
            {/* <p className="text-gray-600">Map goes here...</p> */}
          </Card>
        </div>
      </div>
    </>
  );
}

export default Services;