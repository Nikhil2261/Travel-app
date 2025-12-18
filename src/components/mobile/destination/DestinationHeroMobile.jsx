// import NearbyPlacesMobile from "./NearbyPlacesMobile";
// import backIcon from "../../../icons/Group 1.png";
// import heartIcon from "../../../icons/Like-Icon.png";

// export default function DestinationHeroMobile() {
//   return (
//     <div className="dest-hero-mobile">
      
//       {/* HERO IMAGE */}
//       <img
//         src="/src/assets/darjeeling.jpg"
//         alt="Darjeeling"
//         className="dest-hero-img"
//       />

//       {/* TOP ICONS */}
//       <button className="dest-back">
//         <img src={backIcon} alt="Back" />
//       </button>

//       <button className="dest-like">
//         <img src={heartIcon} alt="Like" />
//       </button>

//       {/* NEARBY PLACES */}
//       <div className="nearby-wrap">
//         <div className="nearby-title">Nearby Places</div>
//         <NearbyPlacesMobile />
//       </div>

//     </div>
//   );
// }


// components/mobile/destination/MobileDestHero.jsx
 import backIcon from "../../../icons/Group 1.png";
 import heartIcon from "../../../icons/Like-Icon.png";

export default function MobileDestHero() {
  return (
    <div className="md-hero">
      <img
        src="/src/assets/darjeeling.jpg"
        className="md-hero-img"
      />

      {/* back */}
      <button className="md-icon left">
        <img src={backIcon} />
      </button>

      {/* heart */}
      <button className="md-icon right">
        <img src={heartIcon} />
      </button>

      {/* GLASS NEARBY PLACES */}
      <div className="md-nearby-glass">
        <p>Nearby Places</p>
        <div className="md-nearby-list">
          {[1,2,3,4,5].map(i => (
            <img
              key={i}
              src="/src/assets/place.jpg"
              className="md-nearby-img"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
