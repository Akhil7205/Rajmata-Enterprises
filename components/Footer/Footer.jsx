import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>SECURITY SERVICES</h4>
          <ul>
            <li>Bank Security</li>
            <li>Bouncer and Bodyguard</li>
            <li>Building Security</li>
            <li>Escort Guard</li>
            <li>Event Security</li>
            <li>Female Security Guard</li>
            <li>Hospital Security</li>
            <li>Industrial Security</li>
            <li>Office Security</li>
            <li>Property Security</li>
            <li>Retail Security</li>
            <li>School Security</li>
            <li>Security Guard</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>FACILITY SERVICES</h4>
          <ul>
            <li>Corporate Housekeeping Service</li>
            <li>Office Boy</li>
            <li>Pantry Boy</li>
          </ul>
          <h4>MANPOWER SERVICES</h4>
          <ul>
            <li>Front & Back Office Manpower</li>
            <li>Temp Staffing</li>
            <li>Event Staff</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Security Operation</li>
            <li>Training</li>
            <li>FAQ</li>
            <li>Career</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>CONTACT US</h4>
          <ul>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>Shirwal</li>
            <li>Satara</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © Copyright {currentYear} Rajmata Enterprise. All rights reserved. Powered by:{' '}
          <a href="akhilshinde.in" target='/blank' style={{color:'blue'}}>Akhil Shinde</a>.
        </p>
        <div className="footer-certificates">
          <img src="/path/to/godaddy-icon.png" alt="GoDaddy Verified & Secured" />
          <img src="/path/to/dmca-icon.png" alt="DMCA Protected" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
