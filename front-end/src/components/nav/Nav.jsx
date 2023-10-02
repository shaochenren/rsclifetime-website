import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { FaLifeRing } from 'react-icons/fa'; // importing the new icon

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href="#skills-interests" onClick={() => setActiveNav('#skills-interests')} className={activeNav === '#skills-interests' ? 'active' : ''}><BiBook/></a>
            <a href="#recent-life" onClick={() => setActiveNav('#recent-life')} className={activeNav === '#recent-life' ? 'active' : ''}><FaLifeRing/></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiMessageSquareDetail/></a>
        </nav>
    );
}

export default Nav;
