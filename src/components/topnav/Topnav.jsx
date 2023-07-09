// Navbar.js

import React, { useState, useEffect } from 'react';
import './topnav.css';

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
        if (window.scrollY > 0) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    window.addEventListener('scroll', checkScroll);
    
    return () => {
        window.removeEventListener('scroll', checkScroll);
    };
}, []);

  return (
    <nav className={`navbar ${show && 'navbar__show'}`}>
      <a href="/home" className="navbar__link">Home</a>
      <a href="/about" className="navbar__link">About</a>
      <a href="/contact" className="navbar__link">Contact</a>
      <a href="/Recent-life" className="navbar__link">Recent-life</a>
      <a href="/Blogs" className="navbar__link">Blogs</a>
    </nav>
  );
}

export default Navbar;
