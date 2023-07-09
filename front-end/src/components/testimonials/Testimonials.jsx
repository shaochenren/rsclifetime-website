import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/sky.jpg'
import AVTR2 from '../../assets/diving.jpg'
import AVTR3 from '../../assets/skateboard.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    review: 'I am currently engaged in the pursuit of obtaining a Skydiving A License, which represents a significant milestone in my skydiving journey. I have successfully completed four of the required certifications, leaving four more remaining to fulfill.'
  },
  {
    avatar: AVTR2,
    review: 'I have already obtained my scuba diving license, along with the additional certification for night diving. Currently, I am actively pursuing the acquisition of a free diving license.'
  },
  {
    avatar: AVTR3,
    review: 'I have been skateboarding for four years now, and it has become a regular part of my daily routine, especially when I commute to school. Skateboarding brings me immense joy and holds a special place in my memories.'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials