import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import ssl from '../Footer/footimg/ssl2.png'
import godaddy from '../Footer/footimg/godaddy2.jpg'
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
          <ul className="Link">
          <li><Link to="/ServiceCards">Security Operation</Link></li>
            <li><Link to="ServiceCards">Training</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/Contactus">Sitemap</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>CONTACT US</h4>
          <ul className='Link'>
            <li><Link to="/contactus#mumbai">Mumbai</Link></li>
            <li><Link to="/contactus#pune">Pune</Link></li>
            <li><Link to="/contactus#shirwal">Shirwal</Link></li>
            <li><Link to="/contactus#satara">Satara</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © Copyright {currentYear} Rajmata Enterprise. All rights reserved. Powered by:{' '}
          <a href="akhilshinde.in" target='/blank' style={{color:'blue'}}>Akhil Shinde</a>.
        </p>
        <div className="footer-certificates">
          <img src={ssl} alt="GoDaddy Verified & Secured" />
          <img src={godaddy} alt="DMCA Protected" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
