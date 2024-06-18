import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMap = () => {
  const position = [37.2992304, -107.8733226,17];

  return (
    <div className="mt-5" style={{
      height: '300px',
      width: '70%',
      margin: '0 auto',
      marginTop: '1.25rem',
      alignItems: 'center'
    }}>
      <MapContainer center={position} zoom={12} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            10000 E Louisiana. <br /> ✈️Here!.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LocationMap;
