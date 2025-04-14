import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from "./img/image.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} className="navlogoimg" alt="Logo" />
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink to="/AboutUs" onClick={() => setIsOpen(false)}>AboutUs</NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink to="/ServiceCards">Services</NavLink>
            {/* <div className="dropdown-content services">
              <div className="dropdown-column">
                <a href="#service14">Bank Security</a>
                <a href="#service1">Commercial Security Services</a>
                <a href="#service2">Special Event Security Services</a>
                <a href="#service5">Facility / Attendant Services</a>
              </div>
              <div className="dropdown-column">
                <a href="#service6">Industrial Security Services</a>
                <a href="#service7">Security Audit</a>
                <a href="#service8">Surveillance</a>
                <a href="#service9">Electronic Security</a>
              </div>
              <div className="dropdown-column">
                <a href="#service11">Residential Security Services</a>
                <a href="#service12">Security Consultancy</a>
                <a href="#service13">VIP Protection</a>
                <a href="#service16">Utility Services</a>
              </div>
            </div> */}
          </li>
          <li className="nav-item">
            <NavLink to="/Customers" onClick={() => setIsOpen(false)}>Customers</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Career" onClick={() => setIsOpen(false)}>Career</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/ContactUs" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
