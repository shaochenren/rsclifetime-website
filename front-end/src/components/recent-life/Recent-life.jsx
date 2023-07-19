import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./recent-life.css"

const RecentLife = () => {
  // This is where you'll store your images grouped by date
  const [imageGroups, setImageGroups] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    if (startDate && endDate) {
      fetchImages();
    }
  }, [startDate, endDate]);

  const fetchImages = async () => {
    try {
      let url = 'http://localhost:8000/images/';
      if (startDate && endDate) {
        url += `?start_date=${startDate.toISOString()}&end_date=${endDate.toISOString()}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      console.log('Fetched data:', data);  // Log the fetched data to the console
      setImageGroups(data);
    } catch (error) {
      console.error('Failed to fetch images:', error);
    }
  };
  
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div>
      <h2>Recent Life</h2>
      <div>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} isClearable placeholderText="From date" />
        <DatePicker selected={endDate} onChange={date => setEndDate(date)} isClearable placeholderText="To date" />
        <button onClick={fetchImages} style={{ zIndex: 1000 }}>Load Images</button>
      </div>
      {Object.keys(imageGroups).map((date) => (
        <div key={date}>
          <h3>{date}</h3>
          <div className='posts-container'>
            <Slider {...settings}>
              {imageGroups[date].map((image, index) => (
                <div key={index} className='post-card'>
                  <img src={image.url} alt={image.description || "recent life"} />
                  <p>{image.description}</p>
                  <div>
                    {image.comments && image.comments.map((comment, index) => (
                      <p key={index}>{comment.content}</p>
                    ))}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentLife;
