const HomePage = () => (
  <section className="hero">
    <h1>Welcome to SMART GUIDE CITY</h1>
    <p>
      Explore tourist places, discover city facilities, plan your trips, and share ratings in one smart city tourism platform.
    </p>
    <div className="grid-2">
      <div className="card"><h3>Guest User</h3><p>Browse places, facilities, and public reviews without login.</p></div>
      <div className="card"><h3>Registered Tourist</h3><p>Create travel plans, add reviews, and use your personal dashboard.</p></div>
      <div className="card"><h3>Admin</h3><p>Manage places, monitor reports, and control data quality.</p></div>
      <div className="card"><h3>Secure Access</h3><p>Role-based authentication with dedicated portals for admin and tourists.</p></div>
    </div>
  </section>
);

export default HomePage;
