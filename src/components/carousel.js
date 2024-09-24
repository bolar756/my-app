import React, { useState, useEffect, useRef } from 'react';
import user from '../assets/img/mear-removebg-preview-removebg-preview-removebg-preview.png'
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const slideRefs = useRef([]);

  const slides = [
    {
        image: {user},
        caption: 'Slide 1',
      }
  ];

  useEffect(() => {
    slideRefs.current = carouselRef.current.children;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(intervalId);
  }, [slides]);

  return (
    <div ref={carouselRef} className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          ref={(el) => (slideRefs.current[index] = el)}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={slide.image} alt={slide.caption} />
          <p>{slide.caption}</p>
        </div>
      ))}
      <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)}>
        Previous
      </button>
      <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)}>
        Next
      </button>
    </div>
  );
}

export default Carousel;