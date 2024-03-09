

import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedPath = () => {
  const pathAnimation = useSpring({
    from: { strokeDashoffset: '100%' },
    to: { strokeDashoffset: '0%' },
    config: { duration: 5000 }, 
  });

  return (
    <animated.svg width="100%" height="100" style={{ position: 'absolute', top: '50%', left: 0 }}>
      <animated.path
        d="M 0 50 L 100% 50"
        stroke="#2cede6"
        strokeWidth="2"
        fill="transparent"
        style={pathAnimation}
      />
    </animated.svg>
  );
};

export default AnimatedPath;
