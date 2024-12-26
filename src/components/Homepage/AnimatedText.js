import React, { useEffect } from "react";

const AnimatedText = ({ onAnimationComplete }) => {
  useEffect(() => {
    const textElement = document.getElementById("animatedText");

    const restartAnimation = () => {
      textElement.style.transition = "none";
      textElement.style.strokeDashoffset = "0";

      setTimeout(() => {
        textElement.style.transition = "stroke-dashoffset 3s ease";
        textElement.style.strokeDashoffset = "1000";

        // Call the callback to signal animation complete
        setTimeout(() => {
          if (onAnimationComplete) onAnimationComplete();
        }, 3500); // Wait for the full animation to complete
      }, 50);
    };

    restartAnimation();
  }, [onAnimationComplete]);

  return (
    <svg
      viewBox="0 0 800 200"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "auto",
      }}
    >
      <defs>
        <pattern id="imagePattern" patternUnits="userSpaceOnUse" width="400" height="400">
          <image
            href="https://iili.io/20FHSCN.png"
            x="0"
            y="0"
            width="400"
            height="400"
          />
        </pattern>

        <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blurred" />
          <feOffset in="blurred" dx="0" dy="0" result="offsetBlurred" />
          <feFlood floodColor="#CA3435" result="glowColor" /> {/* Updated glow color to red */}
          <feComposite in="glowColor" in2="offsetBlurred" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <text
        id="animatedText"
        x="50%"
        y="150"
        style={{
          fill: "url(#imagePattern)",
          fontFamily: '"Protest Guerrilla", sans-serif',
          fontSize: "150px",
          letterSpacing: "5px",
          stroke: "#CA3435",  // Updated stroke color to red
          strokeWidth: "1px",
          strokeDasharray: "500",
          strokeDashoffset: "500",
          filter: "url(#glowFilter)",
          textAnchor: "middle",
        }}
      >
        SDV-6.0
      </text>
    </svg>
  );
};

export default AnimatedText;
