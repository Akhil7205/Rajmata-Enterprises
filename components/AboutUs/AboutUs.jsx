import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import clean from './img/clean.jpg'
import OIP from './img/OIP.jpg'
import dis from './img/dis.jpg'
import office2 from './img/office3.jpg'
import './AboutUs.css'; // Custom CSS file

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
            <Slider {...settings}>
                <div>
                    <img src={clean}alt="Image 1" className="slider-image" />
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
          <div>
            
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
          best in security. Our philosophy is giving <span className="emphasis">
          “Security beyond Guarding”</span> experience to our clients. We truly believe that Security
          is much more than mere deployment and monitoring of guards. It involves thorough 
          identification of roles and responsibilities of each guard and providing training to 
          enable them to perform their duties in the most efficient and productive manner. We aim 
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
        </div>
          
       
        
        <div className="owner-section">
        <h3 className="owner-title"> Mahadev Balu Pise</h3>
        <div className="owner-content">
          <img src={office2} alt="mahadevbalu pese" className="owner-image" />
          <p>
            Shri mahadevbalu pese Chairman & Managing Director of BIS group of companies is also currently member of legislative assembly, Maharashtra State. As President of the Uttar Bharatiya Sangh, Shri. RN. Singh represents the North Indians residing in Mumbai. Besides this, he is heading/running many social organisation for the upliftment of poorer in the society.
          </p>
        </div>

        <div className="board-directors-section">
        <h3 className="board-directors-title">BOARD OF DIRECTORS</h3>
        <img src={OIP} alt="Board of Directors" className="board-directors-image" />
      </div>
      </div>

      </div>
      </div>



      
     
    </div>






    );
};

export default AboutUS;
