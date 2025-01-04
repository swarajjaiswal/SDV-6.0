import React from "react";
import WordFlick from "./WordFlick";
import "./Whysdv.css";

const Whysdv = () => {
  return (
    <div className="why-container">
      <div className="why-heading">
        <h1>The Vision Behind SDV</h1>
      </div>
      <div>
        <WordFlick />
      </div>
      <div className="media-container">
        {/* First Row */}
        <div className="media-row">
          {/* Video 1 */}
          <div className="media-item video1">
            <video src="/sdvvideo1.mp4" autoPlay loop muted>
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Image 1 */}
          <div className="media-item photo1">
            <img src="/sdvbot.jpg" alt="Photo 1" />
          </div>
        </div>
        {/* Second Row */}
        <div className="media-row">
          {/* Image 2 */}
          <div className="media-item photo2">
            <img src="/sdvcrowd.jpg" alt="Photo 2" />
          </div>
          {/* Video 2 */}
          <div className="media-item video2">
            <video src="/sdvvideo2.mp4" autoPlay loop muted>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="media-right">
          <h3>An event where creativity meets technology, allowing students to design, build, and test their own self-driving car prototypes.</h3>
          <p>
            This kit is the foundation of your self-driving car prototype. It
            provides all the essential components needed to design, assemble, and
            program your vehicle. From sensors for detecting obstacles to motors for
            movement, every part plays a crucial role in bringing your ideas to life.
            Whether you're a beginner or an advanced builder, this kit equips you to
            explore the exciting world of autonomous technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whysdv;
