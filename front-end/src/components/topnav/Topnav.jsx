import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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
      <Link to="/" className="navbar__link">Home</Link>
      <Link to="/about" className="navbar__link">About</Link>
      <Link to="/contact" className="navbar__link">Contact</Link>
      <Link to="/recent-life" className="navbar__link">Recent-life</Link>
      <Link to="/blogs" className="navbar__link">Blogs</Link>
    </nav>
  );
}

export default Navbar;