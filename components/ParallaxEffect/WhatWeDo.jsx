import React from 'react';
import './WhatWeDo.css'; 
// import backgroundImg from './img/Services.jpg'; // Import your image

const WhatWeDo = () => {
  return (
    <div>

      {/* Image element with a parallax effect */}
      <div className="parallax-container">
        {/* <img src={backgroundImg} alt="Background" className="parallax-image" /> */}
        <div className="parallax-content">
          <h1>WHAT WE DO</h1>
        </div>
      </div>

    </div>
  );
};

export default WhatWeDo;
