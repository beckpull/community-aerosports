import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMap = () => {
  const kfmnPosition = [36.7391, -108.2287];
  const kdroPosition = [37.1515, -107.7538];

  return (
    <div
    className="mt-5"
    style={{
      height: '300px',
      width: '90%',
      margin: '0 auto',
      marginTop: '1.25rem',
      alignItems: 'center',
      zIndex: 1 // Ensure it’s not interfering with hover card z-index
    }}
  >
      <MapContainer center={[36.9453, -107.9913]} zoom={8} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={kfmnPosition}>
          <Popup>
            ✈️ Four Corners Regional Airport (KFMN)<br />1300 W Navajo St,<br />Farmington, NM 87401
          </Popup>
        </Marker>
        <Marker position={kdroPosition}>
          <Popup>
            ✈️ Durango-La Plata County Airport (KDRO)<br />1000 Airport Rd,<br />Durango, CO 81303
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LocationMap;