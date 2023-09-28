import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Proficiencies = () => {
  return (
    <section id='services'>
      <h5>My Proficiencies</h5>
      <h2>Areas of Interest</h2>

      <div className="container services__container">
        
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon' /><p>React.js & Redux</p></li>
            <li><BiCheck className='service__list-icon' /><p>Responsive Web Design</p></li>
            <li><BiCheck className='service__list-icon' /><p>CSS Preprocessors: SASS/SCSS</p></li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon' /><p>Node.js & Express.js</p></li>
            <li><BiCheck className='service__list-icon' /><p>Database: MongoDB</p></li>
            <li><BiCheck className='service__list-icon' /><p>API Integration & Development</p></li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Design & Creative</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon' /><p>UI/UX Principles</p></li>
            <li><BiCheck className='service__list-icon' /><p>Graphic Design: Adobe Suite</p></li>
            <li><BiCheck className='service__list-icon' /><p>Prototyping & Wireframing</p></li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Proficiencies
