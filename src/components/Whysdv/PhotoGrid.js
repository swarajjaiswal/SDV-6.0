import React, { useState, useEffect } from "react";
import "./PhotoGrid.css";
import {gsap }from "gsap";
import { Flip } from "gsap/Flip";
import imagesLoaded from "imagesloaded";

const PhotoGrid = ({ photos }) => {
  const [activePhoto, setActivePhoto] = useState(null);
  const [gridItems, setGridItems] = useState([]);
  
  useEffect(() => {
    gsap.registerPlugin(Flip);
    
    // Preload images
    preloadImages(".grid__img").then(() => {
      // Initialize event listeners after images are loaded
      initEvents();
    });
  }, []);
  
  const preloadImages = (selector = "img") => {
    return new Promise((resolve) => {
      imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
    });
  };

  const flipImage = (gridItem, gridImage) => {
    gsap.set(gridItem, { zIndex: 99 });
    const state = Flip.getState(gridImage, { props: "borderRadius" });
    if (activePhoto !== null) {
      gridItem.appendChild(gridImage);
    } else {
      setActivePhoto(null);
    }
    
    Flip.from(state, {
      duration: 1,
      ease: "expo.inOut",
      absolute: true,
      prune: true,
      onComplete: () => {
        if (activePhoto !== null) {
          gsap.set(gridItem, { zIndex: "auto" });
        }
      }
    });
  };

  const toggleImage = (ev) => {
    const gridImage = ev.target;
    const gridItem = gridItems[gridImage.dataset.index];
    flipImage(gridItem, gridImage);
  };

  const initEvents = () => {
    const gridImages = document.querySelectorAll(".grid__img");
    gridImages.forEach((gridImage, position) => {
      gridImage.dataset.index = position;
      gridImage.addEventListener("click", toggleImage);
    });
  };

  const handlePhotoClick = (index) => {
    setActivePhoto(activePhoto === index ? null : index);
  };

  const handleOverlayClick = () => {
    setActivePhoto(null); // Close the photo when overlay is clicked
  };

  return (
    <div>
      {/* Background overlay */}
      {activePhoto !== null && (
        <div className="overlay" onClick={handleOverlayClick}></div>
      )}

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div
            className={`photo-item ${activePhoto === index ? "active" : ""}`}
            key={index}
            onClick={() => handlePhotoClick(index)}
          >
            <img className="grid__img" src={photo.src} alt={photo.alt || `Photo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
