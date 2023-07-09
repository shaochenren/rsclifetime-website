import React, { useEffect } from 'react';
import Swiper from 'swiper';
import './swiper.css';
import Pic1 from '../../assets/portfolio1.jpg';
import Pic2 from '../../assets/portfolio2.jpg';
import Pic3 from '../../assets/portfolio3.jpg';

const SwiperComponent = () => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1, // Display only one image at a time
      spaceBetween: 15, // Adjust the spacing between slides as per your needs
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src={Pic1} alt="Portfolio Image 1" />
        </div>
        <div className="swiper-slide">
          <img src={Pic2} alt="Portfolio Image 2" />
        </div>
        <div className="swiper-slide">
          <img src={Pic3} alt="Portfolio Image 3" />
        </div>
      </div>

      <div className="swiper-pagination"></div>

      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>

      <div className="swiper-scrollbar"></div>
    </div>
  );
};

export default SwiperComponent;
