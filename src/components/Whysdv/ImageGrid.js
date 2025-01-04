import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";
import imagesLoaded from "imagesloaded";
import "./PhotoGrid.css";

const PhotoGrid = ({ photos }) => {
  const [activePhoto, setActivePhoto] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const gridRef = useRef(null);
  const fullscreenRef = useRef(null);
  const gridItemsRef = useRef([]);
  const gridImagesRef = useRef([]);

  useEffect(() => {
    preloadImages(".grid__img").then(() => {
      gridItemsRef.current = Array.from(gridRef.current.querySelectorAll(".grid__item"));
      gridImagesRef.current = Array.from(gridRef.current.querySelectorAll(".grid__img"));

      gridImagesRef.current.forEach((gridImage, index) => {
        gridImage.addEventListener("click", (ev) => toggleImage(ev, index));
      });
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

    if (isFullscreen) {
      gridItem.appendChild(gridImage);
    } else {
      fullscreenRef.current.appendChild(gridImage);
    }

    Flip.from(state, {
      duration: 1,
      ease: "expo.inOut",
      absolute: true,
      prune: true,
      onComplete: () => {
        if (isFullscreen) {
          gsap.set(gridItem, { zIndex: "auto" });
        }
        setIsFullscreen(!isFullscreen);
      },
    });
  };

  const toggleImage = (ev, index) => {
    const gridItem = gridItemsRef.current[index];
    const gridImage = gridImagesRef.current[index];
    flipImage(gridItem, gridImage);
    setActivePhoto(activePhoto === index ? null : index);
  };

  return (
    <div>
      {/* Background overlay */}
      {activePhoto !== null && (
        <div className="overlay" onClick={() => setActivePhoto(null)}></div>
      )}

      <div className="photo-grid" ref={gridRef}>
        {photos.map((photo, index) => (
          <div
            className={`photo-item ${activePhoto === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleImage(null, index)}
          >
            <img
              ref={(el) => (gridImagesRef.current[index] = el)}
              src={photo.src}
              alt={photo.alt || `Photo ${index + 1}`}
              className="grid__img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
