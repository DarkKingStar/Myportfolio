import React, { useState, useEffect } from 'react';
import './AnimatedDiv.css'; // Import your CSS file

const AnimatedDiv = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('targetElement');
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(elementPosition < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="targetElement"
      className={`animated-div ${isVisible ? 'fade-in-left' : ''}`}
    >
      Your content goes here
    </div>
  );
};

export default AnimatedDiv;
