import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/");
  window.location.reload();
};

  return (
    <nav className="navbar">
      <div className="logo">Smart Guide City</div>

      <ul className="nav-links">

        <li><Link to="/">Home</Link></li>

        {token && <li><Link to="/explore">Explore</Link></li>}
        {token && <li><Link to="/planner">Planner</Link></li>}

        {!token && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/admin-login">Admin</Link></li>
          </>
        )}

        {token && user?.role === "tourist" && (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </li>
          </>
        )}

        {token && user?.role === "admin" && (
          <>
            <li><Link to="/admin">Admin</Link></li>
            <li>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </li>
          </>
        )}

      </ul>
    </nav>
  );
}

export default Navbar;