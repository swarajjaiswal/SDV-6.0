import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./WhySdv.css";

// Use relative paths to videos and images in the public folder
const media = [
  { type: "video", src: "/sdvvideo1.mp4" },
  { type: "image", src: "/sdvcrowd1.jpg" },
  { type: "image", src: "/sdvbotcheck.jpg" },
  { type: "video", src: "/sdvvideo2.mp4" },
];

const WhySdv = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to update windowWidth state on window resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine styles based on window width
  const getMediaStyle = () => {
    let maxHeight = "200px"; // Default max height

    if (windowWidth <= 480) {
      maxHeight = "120px"; // Small screens
    } else if (windowWidth <= 768) {
      maxHeight = "150px"; // Medium screens
    }

    return {
      width: "100%",
      maxHeight: maxHeight,
      objectFit: "cover",
    };
  };

  return (
    <div className="why-sdv-container">
      {/* Left: Media Gallery */}
      <div className="sdv-gallery">
        {media.map((item, index) => (
          <motion.div
            key={index}
            className="sdv-gallery-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {item.type === "video" ? (
              <video className="sdv-video" style={getMediaStyle()} autoPlay loop muted>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={item.src} alt={`Gallery ${index}`} className="sdv-image" style={getMediaStyle()} />
            )}
          </motion.div>
        ))}
      </div>

      {/* Right: Text Section */}
      <div className="text-section">
        <h2 className="heading responsive-heading">Why SDV?</h2>
        <p className="description responsive-description">
          Bring your ideas to life by building a self-driving bot with key
          features like line-following, obstacle avoidance, and more.
        </p>

        <ul className="feature-list mt-4 space-y-6">
          <motion.li
            whileHover={{ x: 10 }}
            className="feature-item responsive-feature-item"
          >
            <span>Expert Mentorship</span>&nbsp; – Learn the art of building smart systems with expert guidance.
          </motion.li>
          <motion.li
            whileHover={{ x: 10 }}
            className="feature-item responsive-feature-item"
          >
            <span>Teamwork & Innovation</span>&nbsp; – Collaborate with like-minded peers to solve problems.
          </motion.li>
          <motion.li
            whileHover={{ x: 10 }}
            className="feature-item responsive-feature-item"
          >
            <span>Crafting Quality</span>&nbsp; – Build high-quality, future-shaping projects.
          </motion.li>
          <motion.li
            whileHover={{ x: 10 }}
            className="feature-item responsive-feature-item"
          >
            <span>Boost Your CV</span>&nbsp; – Showcase your skills with impactful projects and certifications.
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default WhySdv;
