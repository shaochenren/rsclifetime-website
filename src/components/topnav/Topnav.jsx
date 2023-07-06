import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './topnav.css';

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${show ? 'navbar__show' : ''}`}>
      <div className="navbar__items">
        <Link to="/home" className="navbar__link">Home</Link>
        <Link to="/something" className="navbar__link">Something</Link>
        <Link to="/contact" className="navbar__link">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
