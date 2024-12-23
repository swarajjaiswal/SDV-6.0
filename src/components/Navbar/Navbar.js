import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <img
            src="https://swarajjaiswal.github.io/saeevents/logo.png"
            alt="Logo"
            className="logo transformed-logo"
          />
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
                position: "relative",
                width: "40px",
                height: "40px",
              }}
            >
              <img
                src="https://github.com/Jayasree7917/car/blob/main/1733946690984.png?raw=true"
                alt="Wheel"
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  filter:
                    "brightness(0) saturate(100%) invert(29%) sepia(77%) saturate(4344%) hue-rotate(278deg) brightness(94%) contrast(92%)",
                }}
              />
            </div>
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
            to="/components"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            onClick={closeMenu}
          >
            SDV Components
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
            to="/dnd"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            onClick={closeMenu}
          >
            DnD
          </NavLink>
          <NavLink
            type="button"
            className={`relative font-bold text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_#63e,0_0_30px_#63e] glow-btn ${isMenuOpen ? "visible open" : "close"}`} 
          >
            REGISTER
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
