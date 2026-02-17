import { useMemo, useState } from 'react';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  pickup: '',
  dropoff: '',
  serviceType: '',
  date: ''
};

function BookRide() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const minDate = useMemo(() => new Date().toISOString().split('T')[0], []);

  const validate = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Full name is required.';
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!/^\d{10,15}$/.test(formData.phone)) {
      nextErrors.phone = 'Phone must be 10-15 digits only.';
    }

    if (!formData.pickup.trim()) {
      nextErrors.pickup = 'Pickup location is required.';
    }

    if (!formData.dropoff.trim()) {
      nextErrors.dropoff = 'Drop-off location is required.';
    }

    if (!formData.serviceType) {
      nextErrors.serviceType = 'Select a service type.';
    }

    if (!formData.date) {
      nextErrors.date = 'Select a ride date.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validate()) {
      setSubmitted(true);
      setFormData(initialForm);
      setErrors({});
    }
  };

  return (
    <section className="panel">
      <h2>Book Ride</h2>
      <p>Choose a service and reserve your taxi in less than a minute.</p>

      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        <label>
          Full Name
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            type="text"
            placeholder="Jane Doe"
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </label>

        <label>
          Email
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="jane@example.com"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Phone
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="1234567890"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>

        <label>
          Pickup Location
          <input
            name="pickup"
            value={formData.pickup}
            onChange={handleChange}
            type="text"
            placeholder="Times Square"
          />
          {errors.pickup && <span className="error">{errors.pickup}</span>}
        </label>

        <label>
          Drop-off Location
          <input
            name="dropoff"
            value={formData.dropoff}
            onChange={handleChange}
            type="text"
            placeholder="JFK Airport"
          />
          {errors.dropoff && <span className="error">{errors.dropoff}</span>}
        </label>

        <label>
          Service Type
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
          >
            <option value="">Choose one</option>
            <option value="city">City Ride</option>
            <option value="airport">Airport Transfer</option>
            <option value="outstation">Outstation Trip</option>
            <option value="corporate">Corporate Travel</option>
          </select>
          {errors.serviceType && (
            <span className="error">{errors.serviceType}</span>
          )}
        </label>

        <label>
          Ride Date
          <input
            name="date"
            value={formData.date}
            onChange={handleChange}
            type="date"
            min={minDate}
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </label>

        <button className="button" type="submit">
          Confirm Booking
        </button>

        {submitted && (
          <p className="success">Booking request submitted successfully.</p>
        )}
      </form>
    </section>
  );
}

export default BookRide;
