import React from 'react';
import img from '../../assets/Toy.webp';

export default function DestinationHero() {
  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <img
        src={img}
        alt="Destination"
        style={{ width: '100%', height: 360, objectFit: 'cover' }}
      />
    </div>
  );
}
