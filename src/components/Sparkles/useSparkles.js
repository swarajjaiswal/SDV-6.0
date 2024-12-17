import { useState, useEffect, useCallback } from 'react';
import { useMousePosition } from './useMousePosition';

const PARTICLE_COUNT = 8;
const COLORS = ['#8B0000', '#B22222', '#FF0000', '#800000', '#000000']; // Darker reds and black
const SPARKLE_LIFETIME = 600; // milliseconds

export const useSparkles = () => {
  const [sparkles, setSparkles] = useState([]);
  const mousePosition = useMousePosition();

  const createSparkle = useCallback((x, y) => {
    const angle = Math.random() * Math.PI * 2;  // Random angle
    const speed = Math.random() * 100 + 50;    // Speed range from 50 to 150
    const size = Math.random() * 8 + 5;       // Larger size range (6 to 16)
    
    // Adding gravity effect by slightly modifying y-velocity
    const velocityX = Math.cos(angle) * speed * (Math.random() - 0.5); 
    const velocityY = Math.sin(angle) * speed - Math.random() * 50;  // Y-velocity influenced by gravity

    return {
      id: `${Date.now()}-${Math.random()}`,
      x,
      y,
      size,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      velocity: {
        x: velocityX,
        y: velocityY
      },
      createdAt: Date.now()
    };
  }, []);

  useEffect(() => {
    if (!mousePosition.x || !mousePosition.y) return;

    const newSparkles = Array.from({ length: PARTICLE_COUNT }).map(() => 
      createSparkle(mousePosition.x, mousePosition.y)
    );

    setSparkles(current => [...current, ...newSparkles]);
  }, [mousePosition.x, mousePosition.y, createSparkle]);

  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      setSparkles(current => 
        current.filter(sparkle => 
          Date.now() - sparkle.createdAt < SPARKLE_LIFETIME
        )
      );
    }, 100);

    return () => clearInterval(cleanupInterval);
  }, []);

  return sparkles;
};
