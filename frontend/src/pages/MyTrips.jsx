import React, { useState } from "react";
import "./MyTrips.css";

function MyTrips() {
  const [trips, setTrips] = useState([
    {
      id: 1,
      name: "Chennai Weekend",
      city: "Chennai",
      start: "2026-03-10",
      end: "2026-03-12",
      status: "Upcoming",
    },
  ]);

  const deleteTrip = (id) => {
    setTrips(trips.filter((trip) => trip.id !== id));
  };

  return (
    <div className="trips-container">
      <div className="trips-header">
        <h2>My Trips</h2>
        <button className="create-btn">+ Create Trip</button>
      </div>

      {trips.length === 0 ? (
        <div className="empty-state">
          <p>No trips planned yet 🚀</p>
        </div>
      ) : (
        <div className="trip-grid">
          {trips.map((trip) => (
            <div key={trip.id} className="trip-card">
              <h3>{trip.name}</h3>
              <p><strong>City:</strong> {trip.city}</p>
              <p><strong>From:</strong> {trip.start}</p>
              <p><strong>To:</strong> {trip.end}</p>
              <p className={`status ${trip.status.toLowerCase()}`}>
                {trip.status}
              </p>

              <div className="trip-actions">
                <button className="view-btn">View</button>
                <button
                  className="delete-btn"
                  onClick={() => deleteTrip(trip.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyTrips;