import { Link } from 'react-router-dom';

const serviceList = [
  {
    title: 'City Rides',
    description: 'Daily commuting with quick pickups and optimized routes.'
  },
  {
    title: 'Airport Transfer',
    description: 'Scheduled trips to and from airports with luggage support.'
  },
  {
    title: 'Outstation Trip',
    description: 'Comfortable long-distance rides with trained drivers.'
  },
  {
    title: 'Corporate Travel',
    description: 'Professional transport for teams and business meetings.'
  }
];

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
