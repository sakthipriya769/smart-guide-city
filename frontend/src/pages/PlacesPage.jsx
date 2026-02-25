const PlacesPage = () => (
  <section>
    <h2>Tourist Places Management</h2>
    <div className="grid-3">
      {['Heritage Fort', 'City Museum', 'Riverfront Park', 'Skyline Viewpoint', 'Cultural Street', 'Botanical Garden'].map((place) => (
        <article key={place} className="card"><h3>{place}</h3><p>Detailed location, timing, and attraction highlights for tourists.</p></article>
      ))}
    </div>
  </section>
);

export default PlacesPage;
