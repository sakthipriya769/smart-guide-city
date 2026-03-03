import "./PlaceCard.css";
import { useState } from "react";

function PlaceCard({ place }) {
  const [imgSrc, setImgSrc] = useState(
    `/images/${place.image_url}`
  );

  return (
    <div className="place-card">
      <img
        src={imgSrc}
        alt={place.name}
        className="place-image"
        onError={() => {
          setImgSrc("/images/no-image.jpg");
        }}
      />

      <div className="place-content">
        <h3>{place.name}</h3>

        <p className="location">
          {place.district} • {place.category}
        </p>

        <p className="description">
          {place.description
            ? place.description.substring(0, 100) + "..."
            : "No description available"}
        </p>

        <button className="view-btn">View Details</button>
      </div>
    </div>
  );
}

export default PlaceCard;