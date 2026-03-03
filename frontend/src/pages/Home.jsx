import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <h1>Discover India's Most Beautiful Places</h1>
      <p>
        Plan your perfect trip with smart recommendations, real reviews,
        and a personalized travel planner.
      </p>
      <div className="hero-buttons">
        <Link to="/explore" className="explore-btn">Explore Places</Link>
        <Link to="/planner" className="plan-btn">Plan a Trip</Link>
      </div>
    </div>
  );
}

export default Home;