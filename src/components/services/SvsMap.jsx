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
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> '
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={kfmnPosition}>
          <Popup>
            <a className='marks' href="https://www.google.com/maps/search/?api=1&query=Four+Corners+Regional+Airport+KFMN+1300+W+Navajo+St+Farmington+NM+87401">
              ✈️ Four Corners Regional Airport (KFMN)<br />1300 W Navajo St,<br />Farmington, NM 87401
            </a>
          </Popup>
        </Marker>
        <Marker position={kdroPosition}>
          <Popup>
            <a className='marks' href="https://www.google.com/maps/search/?api=1&query=Durango-La+Plata+County+Airport+KDRO+1000+Airport+Rd+Durango+CO+81303">
              ✈️ Durango-La Plata County Airport (KDRO)<br />1000 Airport Rd,<br />Durango, CO 81303
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LocationMap;