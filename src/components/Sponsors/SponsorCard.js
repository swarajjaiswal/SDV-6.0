import React from "react";
import "./SponsorCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export function SponsorCard({ name, logo, description, instagram, linkedin, facebook }) {
  return (
    <div className="sponsorscard text-white p-6 rounded-lg shadow-lg">
      {/* Logo Section */}
      <div className="logo mb-4">
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <img
            src={logo}
            alt={`${name} logo`}
            className="w-40 h-40 mx-auto rounded-full object-cover"
          />
        </a>
      </div>

      {/* Sponsor Content */}
      <div className="sponsorcontent text-center">
        <h3 className="text-red-500 text-2xl font-bold mb-2">{name}</h3>
        <p className="text-gray-300 text-base mb-4">{description}</p>

        {/* Social Media Handles */}
        <h4 className="text-lg font-semibold mb-2">Social Media Handles</h4>
        <div className="socialmedia flex justify-center gap-4 text-2xl text-gray-400">
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          )}
          {facebook && (
            <a href={facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
