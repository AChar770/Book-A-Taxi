import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/navLinks';

function Navbar() {
  return (
    <header className="site-header">
      <div className="brand">
        <span className="brand-mark">24/7</span>
        <span className="brand-name">Book A Taxi</span>
      </div>
      <nav>
        <ul className="nav-list">
          {navLinks.map((link) => (
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
