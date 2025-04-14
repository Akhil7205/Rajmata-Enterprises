import React from 'react';
import './ContactUs.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
  return (
    <>
  
    <section className="contact-us">
      <h2>CONTACT US</h2>
      <button>Contact Info</button>
      <button>Service Inquiry</button>
      <div className="contact-details">
        <div className="contact-info">
          <p>Established in the year 2014, 27 branches spread over the Maharashtra</p>
          <p>Business continuity plan begins with us</p>
        </div>
      </div>



    </section>

    <section className="Contact-Info">
    {/* <div className="contact-card">
      <div className="contact-item">
        <FontAwesomeIcon icon={faPhone} className="contact-icon" />
        <span className="contact-text">
          Call us on <strong>+32 9 335 22 73</strong>
        </span>
      </div>
      <div className="contact-item">
        <FontAwesomeIcon icon={faPaperPlane} className="contact-icon" />
        <span className="contact-text">
          Mail us at <strong>info@agconsult.com</strong>
        </span>
      </div>
      <div className="contact-item">
        <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
        <span className="contact-text">
          Follow us on <strong>LinkedIn</strong>
        </span>
      </div>
    </div> */}
    
    </section>

    </>
  );
};

export default ContactUs;
