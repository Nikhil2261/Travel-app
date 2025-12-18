import React from 'react';
import img from '../../assets/Toy.webp';

export default function DestinationHeroMobile() {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src={img}
        alt="destination"
        style={{ width: '100%', height: 260, objectFit: 'cover' }}
      />

      <button style={{
        position: 'absolute',
        top: 16,
        left: 16,
        borderRadius: '50%',
        border: 'none',
        padding: 8
      }}>
        ←
      </button>

      <button style={{
        position: 'absolute',
        top: 16,
        right: 16,
        borderRadius: '50%',
        border: 'none',
        padding: 8
      }}>
        ❤️
      </button>
    </div>
  );
}
