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
  { text: 'We would like to praise Rajmata Enterprises for their uninterrupted and commendable services', authorImage: apl, key: 1 },
  { text: 'Thanks for the security support received during this unprecedented lockdown situation of managing COVID-19', authorImage: dat, key: 2 },
  { text: 'We appreciate the efforts and security support that we are getting from Rajmata Enterprises', authorImage: dec, key: 3 },
  { text: "We deeply appreciate the relentless efforts and top-notch security support provided by Rajmata Enterprises. Their commitment to safeguarding our premises is truly commendable.", authorImage: naik, key: 4 },
  { text: "Rajmata Enterprises has consistently delivered excellent service and dependable support. Their prompt response and attention to detail make a noticeable difference.", authorImage: ele, key: 5 },
  { text: "We are extremely satisfied with the exceptional services offered by Rajmata Enterprises. Their proactive approach and consistent performance have exceeded our expectations.", authorImage: kop, key: 6 },
  { text: "We sincerely thank Rajmata Enterprises for their unwavering security support during the challenging COVID-19 lockdown. Their team stood by us during a critical time, ensuring safety and peace of mind.", authorImage: praj, key: 7 },
  { text: "Working with Rajmata Enterprises has been a great experience. Their dedication to service and client satisfaction is clearly reflected in their everyday operations.", authorImage: ish, key: 8 },
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
