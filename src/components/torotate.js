import React, { useState, useEffect } from 'react';

function RotatingText({ textArray, delay }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, delay);

    return () => clearInterval(intervalId);
  }, [textArray, delay]);

  return (
    textArray[currentIndex]
  );
}

export default RotatingText;