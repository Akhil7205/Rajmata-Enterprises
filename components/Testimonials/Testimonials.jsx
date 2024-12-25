import React, { useState, useEffect } from 'react';
import './Testimonials.css';

// Importing all images
import apl from '../Testimonials/Testimonials img/apl.png';
import dat from '../Testimonials/Testimonials img/dat.png';
import dec from '../Testimonials/Testimonials img/dec.png';
import naik from '../Testimonials/Testimonials img/naik.png';
import ele from '../Testimonials/Testimonials img/ele.png';
import kop from '../Testimonials/Testimonials img/kop.png';
import praj from '../Testimonials/Testimonials img/praj.png';
import ish from '../Testimonials/Testimonials img/ish.png';

// Testimonials data
const testimonials = [
  { text: 'We would like to praise SIS for their uninterrupted and commendable services', authorImage: apl, key: 1 },
  { text: 'Thanks for the security support received during this unprecedented lockdown situation of managing COVID-19', authorImage: dat, key: 2 },
  { text: 'We appreciate the efforts and security support that we are getting from SIS', authorImage: dec, key: 3 },
  { text: 'Their team is very professional and reliable', authorImage: naik, key: 4 },
  { text: 'Excellent service and support!', authorImage: ele, key: 5 },
  { text: 'Very satisfied with the services provided', authorImage: kop, key: 6 },
  { text: 'Highly recommend their services', authorImage: praj, key: 7 },
  { text: 'Great experience working with them', authorImage: ish, key: 8 },
];

function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ];

  const previous = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="carousel-container">
        <button className="carousel-control prev" onClick={previous}>❮</button>
        <div className="carousel">
          {visibleTestimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.key}>
              {/* Image before text */}
              <div className="testimonial-image">
                <img src={testimonial.authorImage} alt="testimonial logo" />
              </div>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </div>
        <button className="carousel-control next" onClick={next}>❯</button>
      </div>
    </div>
  );
}

export default Testimonials;
