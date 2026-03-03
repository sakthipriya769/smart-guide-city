import { useEffect, useState } from "react";
import API from "../services/api";
import PlaceCard from "../components/PlaceCard";
import "./Explore.css";

function Explore() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    API.get("/places")
      .then((res) => setPlaces(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="explore-container">
      <h2 className="explore-title">Explore Tourist Places</h2>

      {places.length === 0 ? (
        <p className="no-data">No places available</p>
      ) : (
        <div className="place-grid">
          {places.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Explore;