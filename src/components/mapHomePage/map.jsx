import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const LocationMap = () => {
  const position = [36.7391, -108.2287];

  return (
    <div className="mt-5" style={{ height: '400px', width: '75%', margin: '0 auto', marginTop: '1.25rem', alignItems: 'center', zIndex: 0 }}>
      <MapContainer center={position} zoom={12} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> '
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <a className='marks' href="https://www.google.com/maps/search/?api=1&query=Four+Corners+Regional+Airport+KFMN+1300+W+Navajo+St+Farmington+NM+87401">
              ✈️  Four Corners Regional Airport (KFMN)<br />1300 W Navajo St,<br />Farmington, NM 87401
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LocationMap;