// ResponsiveCardGrid.jsx

import React from 'react';
import './ServiceCards.css';
import img from './ServiceImgs/img.jpg';
import audit from './ServiceImgs/audit.jpg';
import facility from './ServiceImgs/facility.jpg';
import Resident_security from './ServiceImgs/Resident_security.jpg';
import  serveillance from './ServiceImgs/serveillance.jpg';
import commerical_seurity from './ServiceImgs/commerical_security.jpg'
import utility_services from './ServiceImgs/utility_services.webp'
import security_consultant from './ServiceImgs/security_consultant.jpg'
import vip from './ServiceImgs/vip.jpg'
import bank from './ServiceImgs/bank.jpg'
import event_security from './ServiceImgs/event_security.jpg'

import { Helmet } from 'react-helmet-async';



const cardsData = [
  {
    title: 'COMMERCIAL SECURITY SERVICES',
    description: 'Rajmata Enterprises offers a comprehensive range of security services tailored to various needs, including shopping malls, branded showrooms, jewelry shops, and commercial premises. Rajmata Enterprises is renowned for being the top choice for customers seeking these services.',
    imgSrc:commerical_seurity, // Replace with actual image sources
  },
  {
    title: 'INDUSTRIAL SECURITY SERVICES',
    description: 'Rajmata Enterprises has been providing unmatched security services to large, medium, and small industries located in various parts of the country. Rajmata Enterprises is ready to take on any challenging industrial security assignment located anywhere in India.',
    imgSrc: img,
    
    
  },
  {
    title: 'Residential Security Services',
    description: 'Rajmata Enterprises has been providing unmatched security services to large, medium, and small industries located in various parts of the country. Rajmata Enterprises is ready to take on any challenging industrial security assignment located anywhere in India.',
    imgSrc: Resident_security ,
  },
  {
    title: 'Special Event Security Services',
    description: 'Experience the exceptional security services of Rajmata Enterprises for your special events. With advanced technology, a skilled team, and the necessary infrastructure, Rajmata Enterprises is ready to provide top-notch security solutions at short notice.',
    imgSrc: event_security,
  },
  {
    title: 'Security Audit',
    description: 'Security audit and antecedent verification for any establishment are critically important and require a high level of technical expertise, experience, and professionalism. Rajmata Enterprise, with its extensive experience and a team of highly rated professionals and experts, is the best choice for these essential services.',
    imgSrc: audit,
  },
  {
    title: 'Security Consultancy',
    description: 'Security audits and antecedent verification for any establishment are critically important and require significant technical expertise, experience, and proficiency. Rajmata Enterprise, with its extensive experience and a team of highly rated professionals and experts, is the best choice for these crucial services.',
    imgSrc: security_consultant,
  },
  {
    title: 'Surveillance',
    description: 'Rajmata Enterprise, well-equipped with the latest technological advancements and a full range of electronic and surveillance equipment, offers expert and targeted surveillance services to its valued customers.',
    imgSrc: serveillance ,
  },
  {
    title: 'VIP Protection',
    description: 'Rajmata Enterprise, with its robust man management skills and training on par with paramilitary forces, boasts a large number of armed personnel and advanced technological equipment. We offer top-notch protection services for any VIP across the country.',
    imgSrc: vip,
  },
  {
    title: 'Bank Security',
    description: 'Rajmata Enterprise provides security services to a large number of banks, ATMs, and financial institutions across India. With the largest national network, Rajmata Enterprise is equipped to offer comprehensive security and allied services to any bank or financial institution anywhere in the country.',
    imgSrc: bank,
  },
  {
    title: 'Facility / Attendant Services',
    description: 'In addition to security services, Rajmata Enterprise also offers non-security services such as facility management, attendant services, labor supply, and other manpower services. Our dedicated team ensures these services are provided in a professional manner, meeting the highest standards of quality and efficiency.',
    imgSrc: facility,
  },
  {
    title: 'Utility Services',
    description: 'Besides security services, Rajmata Enterprise also offers a variety of utility services. This includes facility management, attendant services, labor supply, and other manpower-related services. Our professional team ensures that these services are delivered with the utmost efficiency and quality.',
    imgSrc: utility_services,
  },
  
  // Add more card data as needed
];

const ResponsiveCardGrid = () => (
 <div>

 {/* Hero Section */}
 <div className="hero-section">
 <Helmet>
  <title>Security Services in Maharashtra | Rajmata Enterprises</title>
  <meta name="description" content="Rajmata Enterprises provides top-rated security services including residential, industrial, commercial, VIP protection, event security, bank security, and more across Maharashtra." />
  <meta name="keywords" content="Security Services, Maharashtra Security Company, Industrial Security, VIP Protection, Event Security, Rajmata Enterprises" />
  <link rel="canonical" href="https://yourdomain.com/services" />
</Helmet>

      <div className="hero-overlay">
        <h1 className="hero-title">SERVICES</h1>
        <p className="hero-subtitle">
          <span>Home</span> / <span className="current">SERVICES</span>
        </p>
      </div>
      <div className="hero-text">
        <p>
          "Rajmata Enterprises has been maintaining a very long list of customers of repute for a
          very long period of time. Our company is treasured with various
          reputed establishments of Govt. of India besides Big Corporates,
          MNCs, Industries, Banks, Malls, etc.
        </p>
        <p>
          We are proudly associated for a long period of time with some very
          important institutions like Wipro Pari , Decathlon,
          Pharmaceuticals Ltd.,Praj Ltd., 
        KOPL Ltd.,REFCON Ltd,etc...
        </p>
        <p>
          We are presently providing our different services to more than 400
          establishments across Maharashtra, and the clients continue availing our
          services year after year. Many of our customers are availing our
          services on a PAN Maharashtra basis. Rajmata Enterprises believes and works for customer
          satisfaction around the clock. Efficient workforce is deputed at the
          front, well-equipped with all modern facilities and technology and
          backed by top management.
        </p>
        <p>
          Rajmata Enterprises is flooded with customer appreciation, which itself sounds its
          position in the market. The brand value of Rajmata Enterprises is a stamp of security
          and reliability for the customer at large."
        </p>
      </div>
    </div>

 
  <div className="grid">
    {cardsData.map((card, index) => (
      <div className="card" key={index}>
        {/* Card Image */}
        <img src={card.imgSrc} alt={card.title} />

        {/* Title (Always Visible) */}
        <div className="card-title">{card.title}</div>

        {/* Hidden Text (Revealed on Hover) */}
        <div className="card-content">{card.description}</div>
      </div>
    ))}
  </div>
  </div>
);

export default ResponsiveCardGrid;
