import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showRegisterButton, setShowRegisterButton] = useState(false);

  useEffect(() => {
    // Delay the display of the register button by 1 second
    const timer = setTimeout(() => {
      setShowRegisterButton(true);
    }, 1000);

    // Cleanup the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleWheelClick = () => {
    const navItems = document.querySelector(".nav-items");

    if (isMenuOpen) {
      navItems.classList.remove("open");
      navItems.classList.add("close");
      setTimeout(() => {
        navItems.classList.remove("visible");
        setIsMenuOpen(false);
      }, 200);
    } else {
      navItems.classList.add("visible", "open");
      navItems.classList.remove("close");
      setIsMenuOpen(true);
    }
  };

  return (
    <div className="nav-container">
      <div className="left-section">
        <div className="car-logo-container">
          <a href="https://saenitd.in/">
            <img
              src="https://i.ibb.co/fvZpdy8/SAE-Logo-White-3x.png"
              alt="Logo"
              className="logo transformed-logo"
            />
          </a>
        </div>
      </div>

      <div className="right-section">
        <button
          className={`toggle-icon md:hidden ${isMenuOpen ? "open" : ""}`}
          onClick={handleWheelClick}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <div
          className={`nav-items ${isMenuOpen ? "open" : ""}`}
          onClick={closeMenu}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/whysdv"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/components"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            onClick={closeMenu}
          >
            SDV Kit
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            onClick={closeMenu}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/sponsors"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            onClick={closeMenu}
          >
            Sponsors
          </NavLink>
          <NavLink
            to="/dnd"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            onClick={closeMenu}
          >
            DnD
          </NavLink>
          {showRegisterButton && (
            <NavLink
              to="https://docs.google.com/forms/d/1OBjOjsYahT44kt_2BJob65cK5LY6eLn7s7KD-GTnXxY/edit"
              type="button"
              className={`relative font-bold text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-500 dark:focus:ring-red-500 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_#387478,0_0_30px_#387478] glow-btn ${
                isMenuOpen ? "visible open" : "close"
              }`}
              onClick={closeMenu}
            >
              REGISTER
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;