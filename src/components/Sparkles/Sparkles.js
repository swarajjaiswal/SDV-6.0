import React from 'react';
import { useSparkles } from './useSparkles';
import SparkleParticle from './SparkleParticle';

function Sparkles() {
  const sparkles = useSparkles();

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {sparkles.map(sparkle => (
        <SparkleParticle key={sparkle.id} {...sparkle} />
      ))}
    </div>
  );
}

export default Sparkles;