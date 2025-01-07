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
        <h2 className="heading responsive-heading">Benefits and Perks: </h2>
       

       

        {/* Second list with checkmarks */}
        <ul className="space-y-4 text-lg leading-relaxed">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">&#10003;</span>
            <span>Build your own self-driving bot and take it home.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">&#10003;</span>
            <span>
              Learn robotics concepts like line-following, obstacle avoidance,
              cruise control, and more.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">&#10003;</span>
            <span>Gain real-world hands-on robotics and IoT experience.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">&#10003;</span>
            <span>Strengthen your CV with a standout project.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">&#10003;</span>
            <span>
              Earn a certificate of achievement to showcase your skills.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">&#10003;</span>
            <span>
              Connect with like-minded peers, make new friends, and learn from
              shared experiences.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhySdv;
