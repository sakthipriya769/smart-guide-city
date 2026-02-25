const FacilitiesPage = () => (
  <section>
    <h2>City Facilities & Utilities</h2>
    <div className="grid-2">
      {['Transport Hubs', 'Hospitals', 'Police Stations', 'Public Toilets', 'Parking Zones', 'ATM & Banks'].map((item) => (
        <div key={item} className="card"><h3>{item}</h3><p>Nearby utility map with real-time availability and contact information.</p></div>
      ))}
    </div>
  </section>
);

export default FacilitiesPage;
