import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  { text: 'We would like to praise SIS for their uninterrupted and commendable services', author: 'SBI Bank', key: 1 },
  { text: 'Thanks for the security support received during this unprecedented lockdown situation of managing COVID-19', author: 'Accenture', key: 2 },
  { text: 'We appreciate the efforts and security support that we are getting from SIS', author: 'Amazon', key: 3 },
  { text: 'Their team is very professional and reliable', author: 'Google', key: 4 },
  { text: 'Excellent service and support!', author: 'Facebook', key: 5 },
  { text: 'Very satisfied with the services provided', author: 'Twitter', key: 6 },
  { text: 'Highly recommend their services', author: 'Microsoft', key: 7 },
  { text: 'Great experience working with them', author: 'Apple', key: 8 },
  // Add more testimonials as needed
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
    // testimonials[(startIndex + 3) % testimonials.length],
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
              <p>{testimonial.text}</p>
              <h5>{testimonial.author}</h5>
            </div>
          ))}
        </div>
        <button className="carousel-control next" onClick={next}>❯</button>
      </div>
    </div>
  );
}

export default Testimonials;
