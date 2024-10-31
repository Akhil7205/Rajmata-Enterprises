import React from 'react';
// import './WhyChooseUs.css';
import securityGuardsImage from './img/IMG_9950.jpg';
import './WhyChooseUs.css'

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-container">
      <div className="image-wrapper">
        <img src={securityGuardsImage} alt="Security Guards" className="security-image" />
      </div>
      <div className="why-choose-us-content">
        <h2>Why Choose Us ?</h2>
        <ul>
          <li>Free Survey of your site and input from our security expert on various security parameters.</li>
          <li>Flexible budget option by offering tailor-made quotations.</li>
          <li>Trained Guards plus regular onsite training to keep sharpening their job-related skill.</li>
          <li>100% compliance with monthly report submission.</li>
          <li>Remote monitoring of security guards through live tracking app.</li>
          <li>On time payment of salary irrespective of overdue payment status.</li>
          <li>Regular day and night patrolling.</li>
          <li>Replacement of non-performing guards without any question asked.</li>
          <li>Zero deficiency throughout the year.</li>
          <li>Committed to resolve any issue within 48 hours.</li>
          <li>We constantly evolve and upgrade to give you the best security experience.</li>
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseUs;
