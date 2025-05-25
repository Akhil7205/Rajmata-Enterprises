import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import clean from './img/clean.jpg'
import OIP from './img/OIP.jpg'
import dis from './img/dis.jpg'
import office2 from './img/office3.jpg'
import salute from './img/salute.jpg'
import officestaff from './img/office-staff.jpg'
import './AboutUs.css'; // Custom CSS file
import { Helmet } from 'react-helmet';

const AboutUS = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
      
        <div className="container">
          <Helmet>
  <title>About Us | Rajmata Enterprises - Security & Manpower Services</title>
  <meta
    name="description"
    content="Learn more about Rajmata Enterprises, a trusted name in security, housekeeping, and manpower services. Discover our founder, team, and service philosophy."
  />
  <meta
    name="keywords"
    content="Rajmata Enterprises, Security Company, Manpower, Housekeeping, Detective Services, Mumbai Security Services"
  />
</Helmet>

            <Slider {...settings}>
                <div>
                    <img src={clean}alt="Image 1" className="slider-image" />
                </div>
                <div>
                    <img src={salute} alt="Image 3" className="slider-image" />
                </div>
                <div>
                    <img src={OIP} alt="Image 2" className="slider-image" />
                </div>
                <div>
                    <img src={dis} alt="Image 3" className="slider-image" />
                </div>
                
            </Slider>
            <div className="content">
        <h2>WELCOME TO <span>RAJMATA ENTERPRISES</span></h2>

        <div className="company-para">
          
       
          
        
        <div className="owner-section">

        <h3 className="owner-title"> Mahadev Balu Pise</h3>
        <div className="owner-content">
          <img src={office2} alt="mahadevbalu pese" className="owner-image" />
          <p id='owner-para'>
            <strong className='inverted-comma'>"</strong>
            Shri Mahadev Balu Pise Chairman & Managing Director of Rajmata Enterprises group of companie. Besides this, he is heading/running many social organisation for the upliftment of poorer in the society.
            <strong className="inverted-comma">"</strong>
          </p>
        </div>

        <div className="board-directors-section">
        <h3 className="board-directors-title">Office Staff</h3>
        <img src={officestaff} alt="Board of Directors" className="board-directors-image" />
      </div>
      </div>

      <div className="C-para">
            
            <p>
              RAJMATA ENTERPRISES, a premier ISO 9001:2015 Certified Security Group
              Company, provides a wide range of <strong>Security</strong>, 
              <strong> Manpower</strong>, <strong>House-Keeping</strong> and
              <strong> Detective</strong> related services. It includes –
              <span className="highlight"> Armed & Unarmed Manned Guarding Services</span>;
              <span className="highlight"> Cash Van Service</span>; Bouncer & Bodyguard Service;
              Event Security Management; Skilled & Unskilled Manpower Service; Temporary Staffing;
              Facility Management; Housekeeping and Investigation Services.
            </p>
            <p>
              We are the best security guards service provider company in Mumbai. We are passionate 
              about our work and truly believe in offering the best services to our clients at the 
              most affordable cost. We continuously upgrade and improve ourselves to give you the 
              best in security. Our philosophy is giving <strong>
              “Security beyond Guarding”</strong> experience to our clients. We truly believe that Security
              is much more than mere deployment and monitoring of guards. It involves thorough 
              identification of roles and responsibilities of each guard and providing training to 
              enable them to perform their duties in the most efficient and productive manner.<br/> We aim 
              to make your investment on security more productive by supplementing security guard 
              responsibilities with important roles in the best interest of the company and with an aim 
              to relieve the management completely of security and all allied problems. Our security 
              guard service is most sought after services in India.
            </p>
            <p>
              We provide integrated solutions to our clients by combining <strong>Security</strong>, 
              <strong> Housekeeping</strong> and <strong>Manpower</strong> services under one roof and thereby 
              enabling our clients to avoid multiple vendors and deal only with us for all such non-core tasks.
            </p>
            <p>
              At Raj Mata Security Services, we are committed to delivering unmatched protection with integrity, reliability, and 
              professionalism. With over 61 satisfied clients and a strong presence across seven strategic locations, we are proud
               to be one of the fastest-growing security service providers in the region.

              Our team of <span className="highlight">1,200+</span> trained employees professionals is equipped with the skills, discipline, and technology required to safeguard people,
              property, and peace of mind. From corporate offices to industrial facilities and residential communities, we tailor our services to 
              meet the unique needs of each client.
            <br />
              What sets us apart is not just our scale, but our commitment to <strong>quality, transparency, and continuous improvement. Every guard is 
              rigorously trained, continuously monitored</strong> , and supported by a management team that ensures quick response and consistent service delivery.
              </p>
              <p>
              At Raj Mata, we don’t just provide security—we build lasting relationships based on trust, accountability, and results. 
              Whether you’re a local business or an international organization, we’re here to deliver security solutions that evolve with your needs.

              Your safety is our promise.<br></br><span className="highlight">Your trust is our pride.</span> 
                </p>
            </div>

      </div>
      </div>



      
     
    </div>






    );
};

export default AboutUS;
