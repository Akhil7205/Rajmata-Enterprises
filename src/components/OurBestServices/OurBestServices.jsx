import React from 'react';
import './OurBestServices.css';
import { NavLink } from 'react-router-dom';
const OurBestServices = () => {
  const serviceCategories = [
    [
      { name: 'Commercial Security Services', link: '#commercial-security' },
      { name: 'Industrial Security Services', link: '#industrial-security' },
      { name: 'Residential Security Services', link: '#residential-security' },
      { name: 'Security Audit', link: '#security-audit' },
    ],
    [
      { name: 'Security Consultancy', link: '#security-consultancy' },
      { name: 'Surveillance', link: '#surveillance' },
      { name: 'VIP Protection', link: '#vip-protection' },
      { name: 'Electronic Security', link: '#electronic-security' },
      { name: 'Bank Security', link: '#bank-security' },
    ],
    [
      { name: 'Special Event Security Services', link: '#special-event-security' },
      { name: 'Antecedents Verification', link: '#antecedents-verification' },
      { name: 'Facility / Attendant Services', link: '#facility-attendant' },
      { name: 'Utility Services', link: '#utility-services' },
    ],
  ];

  return (
    <div className="our-BestServices-container" aria-labelledby="best-services-title">
      <h2 id="best-services-title">OUR Best Services</h2>
      <p>
        With a track record of more than 14 years coupled with an attitude of perfection, we remain the best choice for ‘Total Security Solutions’. Rajmata Enterprises specializes in the following service models.
      </p>
      <div className="service-lists">
        {serviceCategories.map((category, index) => (
          <ul key={index}>
            {category.map((service, idx) => (
              <li key={idx}>
                <a href={service.link}>{service.name}</a>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <NavLink to="/ServiceCards">
      <button className="get-more-button">CLICK TO GET MORE</button>
      </NavLink> 
    </div>
  );
};

export default OurBestServices;
