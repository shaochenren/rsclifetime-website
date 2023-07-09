import React from 'react';
import './about.css';
import ME from '../../assets/selfie.jpg';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import SwiperComponent from '../swiper/Swiper';
import Test from "../testimonials/Testimonials"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <Test />
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Education</h5>
              <small>Computer Science in California State University Fullerton</small>
              <h5> </h5>
              <small>Computer Science/Cybersecurity in NYU</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
