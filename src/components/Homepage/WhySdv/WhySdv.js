import React from "react";
import { motion } from "framer-motion";
import "./WhySdv.css";

const images = [
  "https://pcbwayfile.s3-us-west-2.amazonaws.com/web/20/12/21/1129065663881t.gif",
  "https://content.instructables.com/FY0/RJ57/LTR8PYNT/FY0RJ57LTR8PYNT.gif?auto=webp&fit=bounds&frame=1auto=webp&frame=1&height=150",
  "https://content.instructables.com/F3W/5MR0/LTR8PXPS/F3W5MR0LTR8PXPS.gif?auto=webp&fit=bounds&frame=1auto=webp&frame=1&height=150",
  "https://hackster.imgix.net/uploads/attachments/955208/uploads2ftmp2f47ee14af-2687-4d5e-84be-dad3a9fa2e992fezgif-5-9c37bdbf2aaa_NXmd4CK3ZQ.gif?auto=compress%2Cformat&gifq=35&w=740&h=555&fit=max",
];

const WhySdv = () => {
  return (
    <div className="why-sdv-container">
      {/* Left: Image Gallery */}
      <div className="sdv-gallery">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="sdv-gallery-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={image} alt={`Gallery ${index}`} />
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
          <motion.li whileHover={{ x: 10 }} className="feature-item responsive-feature-item">
            <span>Expert Mentorship</span>&nbsp; – Learn the art of building smart systems with expert guidance.
          </motion.li>
          <motion.li whileHover={{ x: 10 }} className="feature-item responsive-feature-item">
            <span>Teamwork & Innovation</span>&nbsp; – Collaborate with like-minded peers to solve problems.
          </motion.li>
          <motion.li whileHover={{ x: 10 }} className="feature-item responsive-feature-item">
            <span>Crafting Quality</span>&nbsp; – Build high-quality, future-shaping projects.
          </motion.li>
          <motion.li whileHover={{ x: 10 }} className="feature-item responsive-feature-item">
            <span>Boost Your CV</span>&nbsp; – Showcase your skills with impactful projects and certifications.
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default WhySdv;
