import StatCard from '../components/StatCard';

const TouristDashboard = () => (
  <section>
    <h2>Tourist Dashboard</h2>
    <div className="stats-grid">
      <StatCard label="Saved Plans" value="6" />
      <StatCard label="Places Visited" value="14" />
      <StatCard label="Reviews Posted" value="9" />
      <StatCard label="Upcoming Trips" value="2" />
    </div>
    <div className="card"><h3>Quick Actions</h3><p>Create trip plans, check facilities, and post ratings for the places you visit.</p></div>
  </section>
);

export default TouristDashboard;
