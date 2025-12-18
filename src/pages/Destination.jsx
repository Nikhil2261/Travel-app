import React from 'react';
import DestinationHero from '../components/desktop/DestinationHero';
import DestinationInfo from '../components/desktop/DestinationInfo';
import DestinationTabs from '../components/desktop/DestinationTabs';

export default function Destination() {
  return (
    <div style={{ background: '#f5f7fa', minHeight: '100vh' }}>
      <div className="container" style={{ paddingTop: 32 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
          <DestinationHero />
          <DestinationInfo />
        </div>

        <DestinationTabs />
      </div>
    </div>
  );
}
