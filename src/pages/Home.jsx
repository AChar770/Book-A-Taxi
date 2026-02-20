import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="panel hero-panel">
      <h1>Ride Smarter not Harder</h1>
      <p>
        Quick pickups, fixed pricing, and trained human drivers for airport transfers,
        city tours, and everyday travel.
      </p>
      <div className="hero-actions">
        <Link className="button" to="/book-ride">
          Book Your Ride
        </Link>
        <Link className="button button-muted" to="/services">
          View Services
        </Link>
      </div>
    </section>
  );
}

export default Home;
