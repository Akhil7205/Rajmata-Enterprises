// ResponsiveCardGrid.jsx

import React from 'react';
import './ServiceCards.css';
import img from './ServiceImgs/IMG_9937.jpg';

const cardsData = [
  {
    title: 'COMMERCIAL SECURITY SERVICES',
    description: 'Rajmata Enterprises offers a comprehensive range of security services tailored to various needs, including shopping malls, branded showrooms, jewelry shops, and commercial premises. Rajmata Enterprises is renowned for being the top choice for customers seeking these services.',
    imgSrc: 'https://via.placeholder.com/300x200', // Replace with actual image sources
  },
  {
    title: 'INDUSTRIAL SECURITY SERVICES',
    description: 'Rajmata Enterprises has been providing unmatched security services to large, medium, and small industries located in various parts of the country. Rajmata Enterprises is ready to take on any challenging industrial security assignment located anywhere in India.',
    imgSrc: {img},
    
    
  },
  {
    title: 'Residential Security Services',
    description: 'Rajmata Enterprises has been providing unmatched security services to large, medium, and small industries located in various parts of the country. Rajmata Enterprises is ready to take on any challenging industrial security assignment located anywhere in India.',
    imgSrc: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'Special Event Security Services',
    description: 'Experience the exceptional security services of Rajmata Enterprises for your special events. With advanced technology, a skilled team, and the necessary infrastructure, Rajmata Enterprises is ready to provide top-notch security solutions at short notice.',
    imgSrc: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'Security Audit',
    description: 'Security audit and antecedent verification for any establishment are critically important and require a high level of technical expertise, experience, and professionalism. Rajmata Enterprise, with its extensive experience and a team of highly rated professionals and experts, is the best choice for these essential services.',
    imgSrc: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'Security Consultancy',
    description: 'Security audits and antecedent verification for any establishment are critically important and require significant technical expertise, experience, and proficiency. Rajmata Enterprise, with its extensive experience and a team of highly rated professionals and experts, is the best choice for these crucial services.',
    imgSrc: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'Surveillance',
    description: 'Rajmata Enterprise, well-equipped with the latest technological advancements and a full range of electronic and surveillance equipment, offers expert and targeted surveillance services to its valued customers.',
    imgSrc: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'VIP Protection',
    description: 'Rajmata Enterprise, with its robust man management skills and training on par with paramilitary forces, boasts a large number of armed personnel and advanced technological equipment. We offer top-notch protection services for any VIP across the country.',
    imgSrc: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'Bank Security',
    description: 'Rajmata Enterprise provides security services to a large number of banks, ATMs, and financial institutions across India. With the largest national network, Rajmata Enterprise is equipped to offer comprehensive security and allied services to any bank or financial institution anywhere in the country.',
    imgSrc: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'Facility / Attendant Services',
    description: 'In addition to security services, Rajmata Enterprise also offers non-security services such as facility management, attendant services, labor supply, and other manpower services. Our dedicated team ensures these services are provided in a professional manner, meeting the highest standards of quality and efficiency.',
    imgSrc: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'Utility Services',
    description: 'Besides security services, Rajmata Enterprise also offers a variety of utility services. This includes facility management, attendant services, labor supply, and other manpower-related services. Our professional team ensures that these services are delivered with the utmost efficiency and quality.',
    imgSrc: 'https://via.placeholder.com/300x200',
  },
  
  // Add more card data as needed
];

const ServiceCards = () => (
  <div className="grid">
    {cardsData.map((card, index) => (
      <div className="card" key={index}>
        <img src={card.imgSrc} alt={card.title} />
        <div className="card-content">
          <h3 className="card-title" style={{background:"",padding:'20px'}}>{card.title }</h3>
          <p className="card-description">{card.description}</p>
        </div>
      </div>
      
    ))}
    <div className="bac">
<a href={{}}> <img src={{}} alt="" /></a>

</div>
    
  </div>
);

export default ServiceCards;
