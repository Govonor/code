import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './styles/Map.css'; // Import component-specific CSS

const Map = ({ location }) => {
  return (
    <MapContainer center={location} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={location}>
        <Popup>
          Location
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
