import React from "react";
import WordFlick from "./WordFlick";
import "./Whysdv.css";
const photos = [
  { src: "sdv1.jpg", alt: "Photo 1" },
  { src: "sdv12.jpg", alt: "Photo 2" },
  { src: "sdv2.jpg", alt: "Photo 2" },
  { src: "sdv13.jpg", alt: "Photo 9" },
  { src: "sdv3.jpg", alt: "Photo 3" },
  { src: "sdv14.jpg", alt: "Photo 10" },
  { src: "sdv4.jpg", alt: "Photo 4" },
  { src: "sdv15.jpg", alt: "Photo 11" },
  { src: "sdv5.jpg", alt: "Photo 5" },
  { src: "sdv16.jpg", alt: "Photo 12" },
  { src: "sdv6.jpg", alt: "Photo 6" },
  { src: "sdv17.jpg", alt: "Photo 13" },
  { src: "sdv7.jpg", alt: "Photo 7" },
  { src: "sdv18.jpg", alt: "Photo 14" },
  { src: "sdv8.jpg", alt: "Photo 15" },
  { src: "sdv19.jpg", alt: "Photo 20" },
  { src: "sdv9.jpg", alt: "Photo 16" },
  { src: "sdv20.jpg", alt: "Photo 21" },
  { src: "sdv10.jpg", alt: "Photo 17" },
  { src: "sdv21.jpg", alt: "Photo 22" },
  { src: "sdv11.jpg", alt: "Photo 18" },
  { src: "sdv22.jpg", alt: "Photo 19" },
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

      <div className="media-right">
      <div className="media-container h-auto w-full">
          <video src="./sdvvudeo.mp4" autoPlay loop muted className="w-full h-auto" />
          </div>
          <br />
        <p>
          Welcome to SDV 6.0, where we’re not just focusing on creating projects
          but building an environment where you can nurture your skills and
          ideas to their fullest potential. In this 6th edition, we’re offering
          more than just a tech workshop—we’re crafting a space where you can
          connect with like-minded peers and experienced seniors, learning from
          one another to fuel your growth. Through hands-on projects like
          building manually controlled bots, line-following bots,
          obstacle-avoiding bots, and cruise control systems, you’ll dive deep
          into robotics, IoT, and Arduino programming. SDV 6.0 is all about
          fostering creativity, collaboration, and practical learning. This
          isn’t just about completing a project—it’s about creating an
          experience that helps you grow, learn, and connect with others, all
          while gaining real-world skills that will shape your future.
        </p>

<br />
{/* <h1 className="text-6xl upcoming-details">Exciting Details Coming Soon !!!</h1> */}
     
        <h3>
          An event where creativity meets technology, allowing students to
          design, build, and test their own self-driving car prototypes.
        </h3>
      </div>
    </div>
  );
};

export default Whysdv;
