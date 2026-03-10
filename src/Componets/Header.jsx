import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Optional: close mobile menu after clicking a link
  const closeMenu = () => setIsExpanded(false);

  return (
   <>
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
        <div className="container">

          {/* Brand / Logo */}
          <Link className="navbar-brand fw-bold fs-3" to="/">
            MSB
          </Link>

          {/* Hamburger toggler - visible only on mobile */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-controls="navbarNav"
            aria-expanded={isExpanded}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible menu */}
          <div
            className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>

              {/* You can add dropdown later if needed for "Services" */}
              {/* 
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="servicesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li><Link className="dropdown-item" to="/service1">Service 1</Link></li>
                  <li><Link className="dropdown-item" to="/service2">Service 2</Link></li>
                </ul>
              </li>
              */}

              <li className="nav-item">
                <NavLink
                  to="/signin"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  Sign In
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `nav-link btn btn-outline-light ms-lg-2 ${isActive ? 'active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    
   </>
  );
}