// Navbar.js

import React, { useState, useEffect } from 'react';
import './topnav.css';

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) { // Adjust this value as needed
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <nav className={`navbar ${show && 'navbar__show'}`}>
      <a href="/home" className="navbar__link">Home</a>
      <a href="/about" className="navbar__link">About</a>
      <a href="/contact" className="navbar__link">Contact</a>
    </nav>
  );
}

export default Navbar;
