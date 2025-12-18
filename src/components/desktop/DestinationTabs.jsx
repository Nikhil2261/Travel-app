import React, { useState } from 'react';

const tabs = ['Description', 'Photos', 'Reviews', 'Activities', 'Route'];

export default function DestinationTabs() {
  const [active, setActive] = useState('Description');

  return (
    <div className="card" style={{ marginTop: 24, padding: 20 }}>
      <div style={{ display: 'flex', gap: 16 }}>
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => setActive(t)}
            style={{
              border: 'none',
              background: 'transparent',
              fontWeight: 700,
              color: active === t ? '#1f6cff' : '#6b7280',
              borderBottom: active === t ? '2px solid #1f6cff' : 'none'
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <p style={{ marginTop: 16, color: '#374151' }}>
        Darjeeling is a beautiful hill station famous for tea gardens,
        toy train and Himalayan views.
      </p>
    </div>
  );
}
