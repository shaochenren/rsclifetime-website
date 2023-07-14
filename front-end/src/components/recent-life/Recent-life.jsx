import React, { useEffect, useState } from 'react';
import "./recent-life.css"

const RecentLife = () => {
  // This is where you'll store your images
  const [images, setImages] = useState([]);

  // Fetching images from API or local JSON
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const response = await fetch('http://localhost:8000/images/');
    const data = await response.json();
    setImages(data);
  };

  return (
    <div>
      <h2>Recent Life</h2>
      <div className='images-container'>
        {images.map((image, index) => (
          <div key={index} className='image-card'>
            <img src={image.url} alt={image.description || "recent life"} />
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentLife;
