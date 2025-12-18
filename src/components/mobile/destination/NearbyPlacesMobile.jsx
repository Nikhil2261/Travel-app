const places = [
  "/src/assets/p1.jpg",
  "/src/assets/p2.jpg",
  "/src/assets/p3.jpg",
  "/src/assets/p4.jpg",
  "/src/assets/p5.jpg",
];

export default function NearbyPlacesMobile() {
  return (
    <div className="nearby-row">
      {places.map((img, i) => (
        <div key={i} className="nearby-item">
          <img src={img} alt="place" />
        </div>
      ))}
    </div>
  );
}
