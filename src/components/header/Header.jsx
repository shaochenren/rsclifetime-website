import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/selfie.jpg'
import HeaderSocial from './HeaderSocials'
import Video from '../../assets/video.mp4'
const Header = () => {
  return (
    
    <header>
      <div className = 'video'>
          <video src ={Video} autoPlay loop muted/>
        </div>
      <div className="container header__container">
        
          <div className = "text">
            <h5 className = "greeting">Hello I'm</h5>
            <h1 className = "name">Shaochen Ren</h1>
            <h5 className="text-light">Full-time student grad in 2024</h5>
            <CTA />
            <HeaderSocial />  
           </div> 
{/*
        <div className="me">
          <img src={ME} alt="me" />
        </div> */
}
        {/*<a href="#contact" className='scroll__down'>Scroll Down</a> */}
      </div>
    </header>
  )
}

export default Header
