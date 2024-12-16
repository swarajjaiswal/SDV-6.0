import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const [carPosition, setCarPosition] = useState(100); // Car starts outside the viewport
  const [roadPosition, setRoadPosition] = useState(100); // Road starts outside the viewport
  const [isTransformed, setIsTransformed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 useEffect(() => {
  const carRoadAnimation = setInterval(() => {
    setCarPosition((prev) => {
      if (prev <= -5) {
        clearInterval(carRoadAnimation);
        setTimeout(() => {
          setIsTransformed(true);
          document.querySelector('.car-logo-container').classList.add('transformed');
        }, 500);
        return -5;
      }
      return prev - 2; // Move car left by 2vw
    });

    setRoadPosition((prev) => (prev <= -200 ? -200 : prev - 2)); // Smooth stop for road
  }, 26);

  return () => clearInterval(carRoadAnimation);
}, []);

  
  

  const handleWheelClick = () => {
    const navItems = document.querySelector('.nav-items');

    if (isMenuOpen) {
      navItems.classList.remove('open');
      navItems.classList.add('close');
      setTimeout(() => {
        navItems.classList.remove('visible');
        setIsMenuOpen(false);
      }, 200);
    } else {
      navItems.classList.add('visible', 'open');
      navItems.classList.remove('close');
      setIsMenuOpen(true);
    }
  };

  return (
    <div className="nav-container">
      {/* Left Section: Car, Logo, and Road */}
      <div className="left-section">
        {!isTransformed && (
          <div
            className="road"
            style={{ right: `${roadPosition}vw` }}
          ></div>
        )}
        <div className="car-logo-container">
          {!isTransformed ? (
            <img
              src="https://raw.githubusercontent.com/Jayasree7917/car/main/1733748677541.png"
              alt="Car"
              className="car"
              style={{ left: `${carPosition}vw` }}
            />
          ) : (
            <img
              src="https://swarajjaiswal.github.io/saeevents/logo.png"
              alt="Logo"
              className="logo transformed-logo"
            />
          )}
        </div>
      </div>

      {/* Right Section: Navbar Items */}
      <div className="right-section">
        {isTransformed && (
          <>
            {/* Toggle Icon for Small Screens */}
            <button
        className={`toggle-icon md:hidden ${isMenuOpen ? 'open' : ''}`}
        onClick={handleWheelClick}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <div
            className="wheel-icon"
            style={{
              position: 'relative',
              width: '40px',
              height: '40px',
            }}
          >
            <img
              src="https://github.com/Jayasree7917/car/blob/main/1733946690984.png?raw=true"
              alt="Wheel"
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                filter:
                  'brightness(0) saturate(100%) invert(14%) sepia(100%) saturate(7495%) hue-rotate(0deg) brightness(98%) contrast(101%)',
              }}
            />
          </div>
        )}
      </button>
          </>
        )}
        <div className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" activeClassName="active" className="nav-item">
            Home
          </NavLink>
          <NavLink to="/sdvcomponent" activeClassName="active" className="nav-item">
            SDV Components
          </NavLink>
          <NavLink to="/team" activeClassName="active" className="nav-item">
            Team
          </NavLink>
          <NavLink to="/gallery" activeClassName="active" className="nav-item">
            Gallery
          </NavLink>
        </div>
      </div>
    </div>
  );
};


export default Navbar
