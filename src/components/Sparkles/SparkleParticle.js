import React, { memo } from 'react';
import { motion } from 'framer-motion';

const SparkleParticle = ({ id, x, y, size, velocity }) => {
  const color = '#CA3435'
  return (
    <motion.div
      className="absolute rounded-full"
      initial={{
        x,
        y,
        scale: 0,
        opacity: 1,
        rotate: Math.random() * 360, // Random rotation at start
      }}
      animate={{
        x: x + velocity.x,
        y: y + velocity.y,
        scale: 1,
        opacity: 0,
        rotate: 360, // Continuous rotation during particle movement
      }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // Ease-out effect for smoothness
      }}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        boxShadow: `0 0 ${size * 2}px ${color}`,
      }}
    />
  );
};

export default memo(SparkleParticle);
