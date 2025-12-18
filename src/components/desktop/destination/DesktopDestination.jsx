

import DesktopDestHero from './DestinationHero';
import DesktopDestInfo from './DestinationInfo';
import DesktopDestTabs from './DestinationTabs';

export default function DesktopDestination() {
  return (
    <div className="desktop-destination container">
      
      <div className="dest-top">
        <DesktopDestHero />
        <DesktopDestInfo />
      </div>

      <DesktopDestTabs />

    </div>
  );
}
