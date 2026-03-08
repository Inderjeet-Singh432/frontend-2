// src/components/Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <>
      <header>
        <div className="container nav-container" >
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
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>


      {/* hero start */}
      <section  className="hero"  style={{marginBottom:"50px"}} >
        <div className="container" >
          <div className="hero-content">
            <h1>MSB: "Your comfort is our priority – Get instant booking assistance."</h1>
            <h2>"Hassle-free hotel booking with trusted customer support."</h2>
            <p>"Book your perfect hotel with confidence – Support available anytime.".</p>
            <button className="btn">Get Started</button>
          </div>
        </div>
      </section>
      {/* hero end */}
    </>
  );
}