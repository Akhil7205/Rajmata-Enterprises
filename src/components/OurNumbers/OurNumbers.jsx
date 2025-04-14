import React, { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup'; // Import CountUp
import './OurNumbers.css';

function OurNumbers() {
  const [startAnimation, setStartAnimation] = useState(false); // State for triggering animation
  const ref = useRef(null); // Ref for the component

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true); // Start animation when the component is in view
          observer.unobserve(ref.current); // Stop observing once animation starts
        }
      },
      {
        threshold: 0.5, // Adjust based on when you want to trigger the animation (50% visibility here)
      }
    );

    if (ref.current) {
      observer.observe(ref.current); // Start observing
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Clean up observer on unmount
      }
    };
  }, []);

  const data = [
    { number: 1, label: 'State' },
    { number: 4, label: 'Branches' },
    { number: 27, label: 'Locations' },
    { number: 110, label: 'Customers' },
    { number: 1200, label: 'EMPLOYEES' },
  ];

  return (
    <div className="statistics-container" ref={ref}>
      {data.map((item, index) => (
        <div className="stat-item" key={index}>
          <div className="circle">
            <div className="number">
              <CountUp start={0} end={item.number} duration={4.5} redraw={true} startOnMount={startAnimation} />
            </div>
            <div className="label">{item.label}</div>
          </div>
        </div>
      ))}
      <div className="condition-apply">* Condition Apply</div>
    </div>
  );
}

export default OurNumbers;


