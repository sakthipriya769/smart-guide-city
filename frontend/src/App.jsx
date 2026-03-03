import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import TravelPlanner from "./pages/TravelPlanner";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

// 👇 Import dashboard sub pages
import Profile from "./pages/Profile";
import MyTrips from "./pages/MyTrips";
import SavedPlaces from "./pages/SavedPlaces";
import TravelHistory from "./pages/TravelHistory";
import MyReviews from "./pages/MyReviews";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/planner" element={<TravelPlanner />} />

        {/* ✅ Dashboard Layout with Nested Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="my-trips" element={<MyTrips />} />
          <Route path="saved" element={<SavedPlaces />} />
          <Route path="history" element={<TravelHistory />} />
          <Route path="reviews" element={<MyReviews />} />
        </Route>

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;