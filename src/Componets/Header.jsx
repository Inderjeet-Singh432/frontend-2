// src/components/Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <>
      <header>
        <div className="container nav-container" >
          <div className="logo"><h1>MSB</h1></div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>

              {/* Dropdown for Services */}

              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}