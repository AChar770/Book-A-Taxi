import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/book-ride', label: 'Book Ride' },
  { to: '/contact', label: 'Contact' }
];

function Navbar() {
  return (
    <header className="site-header">
      <div className="brand">
        <span className="brand-mark">24/7</span>
        <span className="brand-name">Book A Taxi</span>
      </div>
      <nav>
        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
                to={link.to}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
