import React, { useState } from 'react';
import './ContactUs.css';
import { Helmet } from 'react-helmet-async';
const ContactUs = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [loadedMaps, setLoadedMaps] = useState({
    pune: false,
    mumbai: false,
    satara: false,
  });

  const handleMapLoad = (city) => {
    setLoadedMaps((prev) => ({ ...prev, [city]: true }));
  };

  return (
    <>
    
      <section className="contact-us">
        
        <h2>CONTACT US</h2>
        <button onClick={() => setActiveSection('contact')}>Contact Info</button>
        <button onClick={() => setActiveSection('form')}>Service Inquiry</button>
        <div className="contact-details">
          <div className="contact-info">
            <p>Established in 2014, 4 branches across Maharashtra.</p>
            <p>Business continuity plan begins with us.</p>
          </div>
        </div>
      </section>

      {/* Show Google Form */}
      {activeSection === 'form' && (
        <div className="form-wrapper">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdD21rgaPFxz9pbfCtHRKghyHPPTxCDLEmgRi08wC1GfaTJfw/viewform?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            loading="lazy"
            title="Service Inquiry Form"
          >
            Loading…
          </iframe>
        </div>
      )}

      {/* Show Contact Info + GPS Cards */}
      {activeSection === 'contact' && (
        <section className="contact-cards">
          {['pune', 'mumbai', 'satara'].map((city) => (
            <div className="contact-card" key={city}>
              <h3>{city.toUpperCase()}</h3>
              {loadedMaps[city] ? (
                <iframe
                  title={`map-${city}`}
                  src={
                    city === 'pune'
                      ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.7465623828025!2d73.9812961750077!3d18.12949118100367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2f70209fd66eb%3A0xa6c31e857f09dbde!2sRAJMATA%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1745342678563!5m2!1sen!2sin"
                      : city === 'mumbai'
                      ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609726043!2d72.74109863406512!3d19.082197839083498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63c5cf3dc4f%3A0x74f621e9290e0b5a!2sMumbai!5e0!3m2!1sen!2sin!4v1713432302736!5m2!1sen!2sin"
                      : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.370879232635!2d74.00210597506417!3d17.680554983236695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1776ebca4dcdb%3A0x5e9d4f507ffac5c6!2sSatara!5e0!3m2!1sen!2sin!4v1713432404180!5m2!1sen!2sin"
                  }
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              ) : (
                <div className="map-thumbnail" onClick={() => handleMapLoad(city)}>
                  <img
                    src={`https://via.placeholder.com/350x200?text=Click+to+Load+${city}`}
                    alt={`Click here to map preview of ${city}`}
                  />
                </div>
              )}
              <div className="contact-item">
                📞 Call: <strong>02169 298934/ +91 9607970492/9730133934</strong><br />
                📧 Email: <strong>rajmataenterprises2014@gmail.com</strong>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default ContactUs;


<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.7465623828025!2d73.9812961750077!3d18.12949118100367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2f70209fd66eb%3A0xa6c31e857f09dbde!2sRAJMATA%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1745342678563!5m2!1sen!2sin" width="400" height="300"
 style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>