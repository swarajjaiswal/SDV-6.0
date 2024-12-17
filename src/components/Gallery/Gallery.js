import React, { useState } from "react";
import './Gallery.css';

// Importing all images
import SAE1 from "../ASSETS/SAEIMG1.JPG";
// import SAE2 from "../ASSETS/SAEIMG2.JPG";
import SAE3 from "../ASSETS/SAEIMG3.JPG";
import SAE4 from "../ASSETS/SAEIMG4.JPG";
// import SAE5 from "../ASSETS/SAEIMG5.JPG";
import SAE6 from "../ASSETS/SAEIMG6.JPG";
import SAE7 from "../ASSETS/SAEIMG7.JPG";
import SAE8 from "../ASSETS/SAEIMG8.JPG";
import SAE9 from "../ASSETS/SAEIMG9.JPG";
import SAE10 from "../ASSETS/SAEIMG10.JPG";
import SAE11 from "../ASSETS/SAEIMG11.JPG";
import SAE12 from "../ASSETS/SAEIMG12.JPG";
import SAE13 from "../ASSETS/SAEIMG13.JPG";
import SAE14 from "../ASSETS/SAEIMG14.JPG";
import SAE15 from "../ASSETS/SAEIMG15.JPG";
import SAE16 from "../ASSETS/SAEIMG16.JPG";
import SAE17 from "../ASSETS/SAEIMG17.JPG";
import SAE18 from "../ASSETS/SAEIMG18.JPG";
import SAE19 from "../ASSETS/SAEIMG19.JPG";
import SAE20 from "../ASSETS/SAEIMG20.JPG";
import SAE21 from "../ASSETS/SAEIMG21.JPG";
import SAE22 from "../ASSETS/SAEIMG22.JPG";
import SAE23 from "../ASSETS/SAEIMG23.JPG";
import SAE24 from "../ASSETS/SAEIMG24.JPG";
import SAE25 from "../ASSETS/SAEIMG25.JPG";
import SAE26 from "../ASSETS/SAEIMG26.JPG";
import SAE27 from "../ASSETS/SAEIMG27.JPG";
import SAE28 from "../ASSETS/SAEIMG28.JPG";
import SAE29 from "../ASSETS/SAEIMG29.JPG";

const Gallery = () => {
  const images = [
    SAE1, SAE3, SAE4, SAE6, SAE7, SAE8, SAE9, SAE10,
    SAE11, SAE12, SAE13, SAE14, SAE15, SAE16, SAE17, SAE18, SAE19, SAE20,
    SAE21, SAE22, SAE23, SAE24, SAE25, SAE26, SAE27, SAE28, SAE29
  ];

  const [expandedImage, setExpandedImage] = useState(null);

  const handleExpandImage = (img) => {
    setExpandedImage(img);
  };

  const handleCloseExpand = () => {
    setExpandedImage(null);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title mt-16">Explore the SDV Gallery</h1>

      {expandedImage && (
        <div className="expanded-view">
          <img src={expandedImage} alt="Expanded View" />
          <div className="close-btn" onClick={handleCloseExpand}>×</div>
        </div>
      )}

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => handleExpandImage(img)}
          >
            <img src={img} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;