

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
