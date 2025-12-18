import React from 'react';
import DestinationHeroMobile from '../components/mobile/DestinationHeroMobile';
import DestinationTabsMobile from '../components/mobile/DestinationTabsMobile';
import DestinationFooterMobile from '../components/mobile/DestinationFooterMobile';

export default function DestinationMobile() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <DestinationHeroMobile />
      <DestinationTabsMobile />
      <DestinationFooterMobile />
    </div>
  );
}
