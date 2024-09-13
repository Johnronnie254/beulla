// src/Gallery.js

import React from 'react';
import './Gallery.css';
import gallery1 from './gallery1.jpg';
import gal2 from './gal2.jpg';
import gallery3 from './gallery3.jpg';
import gallery4 from './gallery4.jpg';
import gallery5 from './gallery5.jpg';
import gallery6 from './gallery6.jpg';
import gallery7 from './gallery7.jpg';

import gallery9 from './gallery9.jpg';
import gal10 from './gal10.jpg';
import gal11 from './gal11.jpg';
import gal12 from './gal12.jpg';


// Array of imported images
const images = [
  gallery1, gal2, gallery3, gallery4, gallery5,
  gallery6, gallery7, gallery9, gal10, gal11, gal12
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1>Our Gallery</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-card">
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
