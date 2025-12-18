export default function DestinationTabsMobile() {
  return (
    <div className="dest-tabs-mobile">

      <div className="tabs-row">
        <button className="active">Description</button>
        <button>Photos</button>
        <button>Review</button>
        <button>Activities</button>
        <button>3d Route</button>
      </div>

      <p className="dest-desc">
        Nestled in the lush foothills of the Himalayas, Darjeeling is a picturesque
        hill station famous for its tea gardens, toy train and Himalayan views.
        <span className="read-more"> Read More</span>
      </p>

      <div className="dest-tags">
        <button>Documentation</button>
        <button className="star-tag">Tradition ⭐</button>
      </div>

      <button className="book-btn-mobile">Book Now</button>

    </div>
  );
}
