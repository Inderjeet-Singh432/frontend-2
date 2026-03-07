// src/components/Header.jsx
import { useState } from 'react';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header>
      <div className="container nav-container">
        <div className="logo">MSB</div>

        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>

            {/* Dropdown for Services */}
            <li
              className="dropdown"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <a href="#services" className="dropdown-toggle">
                Services ▾
              </a>

              {isServicesOpen && (
                <ul className="dropdown-menu">
                  <li><a href="#services">HOTEL</a></li>
                  <li><a href="#services">DORMITORY</a></li>
                </ul>
              )}
            </li>

            <li><a href="#industries">Book now</a></li>
            <li><a href="#blogs">Explore</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}