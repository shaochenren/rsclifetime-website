import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./recent-life.css"

const RecentLife = () => {
  // This is where you'll store your images
  const [images, setImages] = useState([]);

  // Fetching images from API
  useEffect(() => {
    fetchImages();

    // Refresh images every 23 hours (82800000 milliseconds)
    const timer = setInterval(() => {
      fetchImages();
    }, 82800000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('http://localhost:8000/images/');
      const data = await response.json();
      console.log('Fetched data:', data);  // Log the fetched data to the console
      setImages(data);
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
      <div className='posts-container'>
        <Slider {...settings}>
        {images.map((image, index) => (
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
  );
}

export default RecentLife;
