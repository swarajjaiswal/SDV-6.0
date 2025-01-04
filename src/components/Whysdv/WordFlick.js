import React, { useEffect, useState } from "react";

const WordFlick = () => {
  const words = [
    "Creating Smart Driving Bots",
    "Bots for SDVs",
    "The Future of Driving",
    "Get Ready ! !",
  ];

  const [part, setPart] = useState("");
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);

  const skipDelay = 15;
  const speed = 70;

  const containerStyle = {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  };

  const wordStyle = {
    margin: "auto",
    color: "white",
    font: "700 normal 2.5em 'Tahoma'",
    textShadow: "5px 2px #222324, 2px 4px #222324, 3px 5px #222324",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[index].length) {
          setSkipCount((prev) => prev + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        } else {
          setOffset((prev) => prev + 1);
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setIndex((prev) => (prev + 1) % words.length);
        } else {
          setOffset((prev) => prev - 1);
        }
      }

      setPart(words[index].substr(0, offset));
    }, speed);

    return () => clearInterval(interval);
  }, [words, index, offset, forwards, skipCount]);

  return (
    <div style={containerStyle}>
      <div style={wordStyle}>{part}</div>
    </div>
  );
};

export default WordFlick;
