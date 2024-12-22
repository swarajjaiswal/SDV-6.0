import React from "react";
import './Dnd.css';

const Dnd = () => {
  return (
    <div className="dnd-container">
      <video className="dnd-background-video" autoPlay loop muted>
        <source src="/dnd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="dnd-overlay"></div> {/* Add the overlay */}
      <div className="dnd-heading">
        <h1>drag and drift</h1>
        <h2>6.0</h2>
      </div>
      <div className="dnd-coming">
        <h2>coming soon</h2>
      </div>
    </div>
  );
};

export default Dnd;
