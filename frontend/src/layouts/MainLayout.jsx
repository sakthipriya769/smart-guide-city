import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const MainLayout = ({ children }) => {
  const { user, logout } = useAuth();

  return (
    <div>
      <header className="topbar">
        <Link to="/" className="brand">SMART GUIDE CITY</Link>
        <nav>
          <NavLink to="/places">Tourist Places</NavLink>
          <NavLink to="/facilities">Facilities</NavLink>
          <NavLink to="/plans">Travel Plans</NavLink>
          <NavLink to="/reviews">Reviews</NavLink>
          {user?.role === 'admin' && <NavLink to="/admin">Admin Dashboard</NavLink>}
          {user?.role === 'tourist' && <NavLink to="/tourist">Tourist Dashboard</NavLink>}
        </nav>
        <div>
          {!user ? (
            <>
              <Link to="/admin-login" className="btn ghost">Admin Login</Link>
              <Link to="/tourist-login" className="btn">Tourist Login</Link>
            </>
          ) : (
            <button className="btn" onClick={logout}>Logout</button>
          )}
        </div>
      </header>
      <main className="container">{children}</main>
    </div>
  );
};

export default MainLayout;
