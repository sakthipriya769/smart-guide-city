import StatCard from '../components/StatCard';

const AdminDashboard = () => (
  <section>
    <h2>Admin Dashboard</h2>
    <div className="stats-grid">
      <StatCard label="Total Tourists" value="1,258" />
      <StatCard label="Tourist Places" value="124" />
      <StatCard label="Facilities Listed" value="312" />
      <StatCard label="Reports Generated" value="89" />
    </div>
    <div className="card"><h3>Admin Management</h3><p>Manage users, moderate reviews, maintain places and facilities, and export city tourism reports.</p></div>
  </section>
);

export default AdminDashboard;
