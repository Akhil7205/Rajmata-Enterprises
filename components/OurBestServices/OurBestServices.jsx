import React from 'react';
import '../OurBestServices/OurBestServices.css';

const OurBestServices = () => {
  return (
    <div className="our-BestServices-container">
      <h2>OUR Best Services</h2>
      <p>
        With a track record of more than 42 years coupled with an attitude of perfection, we remain the best choice for ‘Total Security Solutions’. Bombay Integrated Security India Limited specializes in the following service models.
      </p>
      <div className="service-lists">
        <ul>
          <li><a href="#commercial-security">Commercial Security Services</a></li>
          <li><a href="#industrial-security">Industrial Security Services</a></li>
          <li><a href="#residential-security">Residential Security Services</a></li>
          <li><a href="#security-audit">Security Audit</a></li>
        </ul>
        <ul>
          <li><a href="#security-consultancy">Security Consultancy</a></li>
          <li><a href="#surveillance">Surveillance</a></li>
          <li><a href="#vip-protection">VIP Protection</a></li>
          <li><a href="#electronic-security">Electronic Security</a></li>
          <li><a href="#bank-security">Bank Security</a></li>
        </ul>
        <ul>
          <li><a href="#special-event-security">Special Event Security Services</a></li>
          <li><a href="#antecedents-verification">Antecedents Verification</a></li>
          {/* <li><a href="#mortgaged-vehicle-seizure">Mortgaged Vehicle Seizure</a></li> */}
          <li><a href="#facility-attendant">Facility / Attendant Services</a></li>
          <li><a href="#utility-services">Utility Services</a></li>
        </ul>
      </div>
      <button className="get-more-button">CLICK TO GET MORE</button>
    </div>
  );
};

export default OurBestServices;
