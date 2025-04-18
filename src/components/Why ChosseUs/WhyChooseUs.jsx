import React from 'react';
import { Link } from 'react-router-dom'; 

import './WhyChooseUs.css';
import securityGuardsImage from './img/IMG_9950.jpg';

const WhyChooseUs = () => {
  const reasons = [
    'Free Survey of your site and input from our security expert on various security parameters.',
    'Flexible budget option by offering tailor-made quotations.',
    'Trained Guards plus regular onsite training to keep sharpening their job-related skill.',
    '100% compliance with monthly report submission.',
    'Remote monitoring of security guards through live tracking app.',
    'On time payment of salary irrespective of overdue payment status.',
    'Regular day and night patrolling.',
    'Replacement of non-performing guards without any question asked.',
    'Zero deficiency throughout the year.',
    'Committed to resolve any issue within 48 hours.',
    'We constantly evolve and upgrade to give you the best security experience.',
  ];

  return (
    <section className="why-choose-us-container" aria-labelledby="why-choose-us-title">
      <div className="image-wrapper" aria-label="Security guards providing services">
        <img src={securityGuardsImage} alt="Security Guards" className="security-image" />
      </div>
      <div className="why-choose-us-content">
        <h2 id="why-choose-us-title">Why Choose Us?</h2>
        <ul>
          {reasons.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
         <Link to="/ServiceCards"style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>  
        <button className="cta-button">Learn More</button>
        </Link>
      </div>
    </section>
  );
};

export default WhyChooseUs;
