import { Link } from 'react-router-dom';
import { serviceList } from '../data/services';

function Services() {
  return (
    <section className="panel">
      <h2>Services</h2>
      <div className="card-grid">
        {serviceList.map((service) => (
          <article className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
      <Link className="button" to="/book-ride">
        Book a Service
      </Link>
    </section>
  );
}

export default Services;
