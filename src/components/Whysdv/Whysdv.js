import React from "react";
import WordFlick from "./WordFlick";
import "./Whysdv.css";
const photos = [
  { src: "sdv1.jpg", alt: "Photo 1" },{ src: "sdv12.jpg", alt: "Photo 2" },
  { src: "sdv2.jpg", alt: "Photo 2" },{ src: "sdv13.jpg", alt: "Photo 9" },
  { src: "sdv3.jpg", alt: "Photo 3" },{ src: "sdv14.jpg", alt: "Photo 10" },
  { src: "sdv4.jpg", alt: "Photo 4" },{ src: "sdv15.jpg", alt: "Photo 11" },
  { src: "sdv5.jpg", alt: "Photo 5" },{ src: "sdv16.jpg", alt: "Photo 12" },
  { src: "sdv6.jpg", alt: "Photo 6" },{ src: "sdv17.jpg", alt: "Photo 13" },
  { src: "sdv7.jpg", alt: "Photo 7" },{ src: "sdv18.jpg", alt: "Photo 14" },
  { src: "sdv8.jpg", alt: "Photo 15" },{ src: "sdv19.jpg", alt: "Photo 20" },
  { src: "sdv9.jpg", alt: "Photo 16" },{ src: "sdv20.jpg", alt: "Photo 21" },
  { src: "sdv10.jpg", alt: "Photo 17" },{ src: "sdv21.jpg", alt: "Photo 22" },
  { src: "sdv11.jpg", alt: "Photo 18" },{ src: "sdv22.jpg", alt: "Photo 19" },
  
];

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
            <img src="/sdvcrowd1.jpg" alt="Photo 1" />
          </div>
        </div>
        {/* Second Row */}
        <div className="media-row">
          {/* Image 2 */}
          <div className="media-item photo2">
            <img src="/sdvbotcheck.jpg" alt="Photo 2" />
          </div>
          {/* Video 2 */}
          <div className="media-item video2">
            <video src="/sdvvideo2.mp4" autoPlay loop muted>
              Your browser does not support the video tag.
            </video>
          </div>
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
            You can also customize it by addin your own features, to make your self-driving car stand out.
          </p>
        </div>
    </div>
  );
};

export default Whysdv;
