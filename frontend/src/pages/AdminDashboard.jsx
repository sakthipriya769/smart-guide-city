import React, { useState, useEffect } from "react";
import API from "../services/api";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <h2 style={{ marginBottom: "30px" }}>Admin Panel</h2>

        <p
          style={activeTab === "dashboard" ? activeMenuStyle : menuStyle}
          onClick={() => setActiveTab("dashboard")}
        >
          Dashboard
        </p>

        <p
          style={activeTab === "places" ? activeMenuStyle : menuStyle}
          onClick={() => setActiveTab("places")}
        >
          Manage Places
        </p>

        <p
          style={activeTab === "reviews" ? activeMenuStyle : menuStyle}
          onClick={() => setActiveTab("reviews")}
        >
          Manage Reviews
        </p>

        <p
          style={activeTab === "plans" ? activeMenuStyle : menuStyle}
          onClick={() => setActiveTab("plans")}
        >
          Travel Plans
        </p>
      </div>

      <div style={mainContentStyle}>
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "places" && <ManagePlaces />}
        {activeTab === "reviews" && <ManageReviews />}
        {activeTab === "plans" && <ManagePlans />}
      </div>
    </div>
  );
};

export default AdminDashboard;

//////////////////////////////////////////////////
// Dashboard
//////////////////////////////////////////////////

const Dashboard = () => (
  <div>
    <h1>Admin Dashboard</h1>
  </div>
);

//////////////////////////////////////////////////
// Manage Places (FULL FIXED)
//////////////////////////////////////////////////

const ManagePlaces = () => {
  const [places, setPlaces] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    district: "",
    category: "",
    description: "",
    image_url: "",
  });

  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
    try {
      const res = await API.get("/places");
      setPlaces(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddPlace = async () => {
    try {
      await API.post("/places", formData);
      alert("Place added successfully");

      setFormData({
        name: "",
        district: "",
        category: "",
        description: "",
        image_url: "",
      });

      fetchPlaces();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    await API.delete(`/places/${id}`);
    fetchPlaces();
  };

  return (
    <div>
      <h1>Manage Tourist Places</h1>

      <div style={formRow}>
        <input
          type="text"
          name="name"
          placeholder="Place Name"
          style={inputStyle}
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="district"
          placeholder="District"
          style={inputStyle}
          value={formData.district}
          onChange={handleChange}
        />

        <select
          name="category"
          style={inputStyle}
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option>Beach</option>
          <option>Temple</option>
          <option>Park</option>
          <option>Museum</option>
          <option>Adventure</option>
          <option>Entertainment</option>
        </select>

        <input
          type="text"
          name="description"
          placeholder="Description"
          style={inputStyle}
          value={formData.description}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image_url"
          placeholder="Image URL"
          style={inputStyle}
          value={formData.image_url}
          onChange={handleChange}
        />

        <button style={buttonStyle} onClick={handleAddPlace}>
          + Add Place
        </button>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Name</th>
            <th>District</th>
            <th>Category</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {places.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                No places found
              </td>
            </tr>
          ) : (
            places.map((place) => (
              <tr key={place.id}>
                <td>{place.name}</td>
                <td>{place.district}</td>
                <td>{place.category}</td>
                <td>
                  {place.image_url && (
                    <img
                      src={place.image_url}
                      alt={place.name}
                      width="60"
                      style={{ borderRadius: "6px" }}
                    />
                  )}
                </td>
                <td>
                  <button
                    style={{ ...buttonStyle, background: "red" }}
                    onClick={() => handleDelete(place.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

//////////////////////////////////////////////////
// Other Sections
//////////////////////////////////////////////////

const ManageReviews = () => <h1>Manage Reviews</h1>;
const ManagePlans = () => <h1>Travel Plans</h1>;

//////////////////////////////////////////////////
// Styles
//////////////////////////////////////////////////

const containerStyle = {
  display: "flex",
  minHeight: "100vh",
  background: "#f1f5f9",
};

const sidebarStyle = {
  width: "250px",
  background: "#1e293b",
  color: "white",
  padding: "20px",
};

const menuStyle = {
  cursor: "pointer",
  marginBottom: "15px",
  padding: "10px",
  borderRadius: "6px",
};

const activeMenuStyle = {
  ...menuStyle,
  background: "#334155",
};

const mainContentStyle = {
  flex: 1,
  padding: "40px",
};

const formRow = {
  display: "flex",
  gap: "10px",
  marginTop: "20px",
  marginBottom: "20px",
  flexWrap: "wrap",
};

const inputStyle = {
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  background: "#2563eb",
  color: "white",
  padding: "8px 15px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const tableStyle = {
  width: "100%",
  background: "white",
  borderCollapse: "collapse",
};