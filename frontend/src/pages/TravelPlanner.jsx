import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Select from "react-select";
import "./TravelPlanner.css";

const TravelPlanner = () => {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [travelDate, setTravelDate] = useState("");
  const [notes, setNotes] = useState("");
  const [plans, setPlans] = useState([]);

  const userName = localStorage.getItem("userName") || "demo_user";

  const fetchPlaces = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/places");
      setPlaces(res.data);
    } catch (error) {
      alert("⚠️ Unable to load destinations.");
    }
  };

  const fetchPlans = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/planner", {
        params: { user_name: userName }
      });
      setPlans(res.data);
    } catch (error) {
      alert("⚠️ Unable to load travel plans.");
    }
  }, [userName]);

  useEffect(() => {
    fetchPlaces();
    fetchPlans();
  }, [fetchPlans]);

  const placeOptions = places.map((place) => ({
    value: place.id,
    label: place.name
  }));

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!selectedPlace || !travelDate) {
      alert("🚨 Please select destination and visit date!");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/planner", {
        user_name: userName,
        place_id: selectedPlace.value,
        travel_date: travelDate,
        notes
      });

      alert(`🎉 "${selectedPlace.label}" added successfully!`);

      setSelectedPlace(null);
      setTravelDate("");
      setNotes("");
      fetchPlans();
    } catch (error) {
      alert("❌ Failed to add plan.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/planner/${id}`);
      alert("🗑 Plan removed!");
      fetchPlans();
    } catch (error) {
      alert("❌ Delete failed.");
    }
  };

  return (
    <div className="planner-container">
      <h1 className="planner-title">Travel Planner</h1>

      <div className="planner-content">

        <div className="planner-form-card">
          <h3>Add to Plan</h3>

          <form onSubmit={handleAdd}>

            <label className="input-label">Destination</label>
            <Select
              options={placeOptions}
              value={selectedPlace}
              onChange={setSelectedPlace}
              placeholder="Choose destination"
              classNamePrefix="react-select"
            />

            <label className="input-label">Visit Date</label>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              required
              className="planner-input"
            />

            <label className="input-label">Notes (Optional)</label>
            <textarea
              placeholder="Any special notes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="planner-input"
            />

            <button type="submit" className="planner-btn">
              Add to Plan
            </button>
          </form>
        </div>

        <div className="planner-cards">
          {plans.length === 0 ? (
            <p>🌍 No travel plans yet!</p>
          ) : (
            plans.map((plan) => (
              <div key={plan.id} className="planner-card">
                <img
                  src={`/images/${plan.image_url}`}
                  alt={plan.name}
                  className="planner-image"
                />

                <div className="planner-info">
                  <h3>{plan.name}</h3>
                  <p>📍 {plan.district}</p>
                  <p>📅 {plan.travel_date}</p>
                  {plan.notes && <p>📝 {plan.notes}</p>}
                </div>

                <button
                  onClick={() => handleDelete(plan.id)}
                  className="planner-delete"
                >
                  🗑
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default TravelPlanner;