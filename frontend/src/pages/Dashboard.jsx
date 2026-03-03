import React, { useState } from "react";
import { FaUser, FaSuitcase, FaHeart, FaHistory, FaStar } from "react-icons/fa";
import Profile from "./Profile";
import "./Dashboard.css";

function Dashboard() {
  const [activeSection, setActiveSection] = useState("profile");

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <Profile />;
      case "trips":
        return <h2>My Trips</h2>;
      case "saved":
        return <h2>Saved Places</h2>;
      case "history":
        return <h2>Travel History</h2>;
      case "reviews":
        return <h2>My Reviews</h2>;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-menu">
          <div
            className={`sidebar-link ${
              activeSection === "profile" ? "profile-link" : ""
            }`}
            onClick={() => setActiveSection("profile")}
          >
            <FaUser style={{ marginRight: "10px" }} />
            Profile Details
          </div>

          <div
            className="sidebar-link"
            onClick={() => setActiveSection("trips")}
          >
            <FaSuitcase style={{ marginRight: "10px" }} />
            My Trips
          </div>

          <div
            className="sidebar-link"
            onClick={() => setActiveSection("saved")}
          >
            <FaHeart style={{ marginRight: "10px" }} />
            Saved Places
          </div>

          <div
            className="sidebar-link"
            onClick={() => setActiveSection("history")}
          >
            <FaHistory style={{ marginRight: "10px" }} />
            Travel History
          </div>

          <div
            className="sidebar-link"
            onClick={() => setActiveSection("reviews")}
          >
            <FaStar style={{ marginRight: "10px" }} />
            My Reviews
          </div>
        </div>

        <button className="logout-btn">Logout</button>
      </div>

      <div className="dashboard-content">
        {renderSection()}
      </div>
    </div>
  );
}

export default Dashboard;