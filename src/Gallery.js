import React, { useState } from 'react';
import './Gallery.css';

const images = [
'/images/i1.jpeg',    
'/images/i2.jpeg',    
'/images/i3.jpeg',    
'/images/i4.jpeg',    
'/images/i5.jpeg',    
'/images/i6.jpeg',    
'/images/image1.jpeg',
'/images/image2.jpeg',
'/images/image3.jpeg',
'/images/card-i1.jpeg',
'/images/card-i2.jpeg',
'/images/card-i3.jpeg',
'/images/card-i4.jpeg',
'/images/card-i5.jpeg',
'/images/card-i6.jpeg',
];

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll ? images : images.slice(0, 5);

  return (
    <div className="gallery-wrapper">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {visibleImages.map((src, index) => (
          <div key={index} className="gallery-thumbnail">
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
      {!showAll && (
        <button className="view-more-btn" onClick={() => setShowAll(true)}>
          View More
        </button>
      )}
    </div>
  );
};

export default Gallery;