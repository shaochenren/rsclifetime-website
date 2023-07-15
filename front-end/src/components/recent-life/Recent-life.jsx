import React, { useEffect, useState } from 'react';
import "./recent-life.css"


const RecentLife = () => {
  // This is where you'll store your images
  const [images, setImages] = useState([]);


  // Fetching images from API
  useEffect(() => {
    fetchImages();
  }, []);


  const fetchImages = async () => {
    const response = await fetch('http://localhost:8000/images/');  // Adjusted the API endpoint
    const data = await response.json();
    setImages(data);
  };


  return (
    <div>
      <h2>Recent Life</h2>
      <div className='posts-container'>
        {images.map((image, index) => (
          <div key={index} className='post-card'>
            <img src={image.url} alt={image.description || "recent life"} />
            <p>{image.description}</p>  // Display image description
            <div>
              {/* Display comments for each image */}
              {/* Note: You need to ensure that each image object includes its related comments */}
              {image.comments && image.comments.map((comment, index) => (
                <p key={index}>{comment.content}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default RecentLife;
