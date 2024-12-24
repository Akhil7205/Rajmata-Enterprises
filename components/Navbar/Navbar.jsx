import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          {/* <a href="#home">Home</a> */}
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item dropdown">
          {/* <a href="#About">About Us</a> */}
          <NavLink to='/AboutUs'>AboutUs</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink to="/ServiceCards">Services ▾</NavLink>
          <div className="dropdown-content services">
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
          </div>
        </li>
      
        <li className="nav-item">
          {/* <a href="#customers">Customers</a> */}
          <NavLink to ="/Customers"> Customers</NavLink>
        </li>
      
        <li className="nav-item">
          {/* <a href="#career">Career</a> */}
          <NavLink to="/Career">Career</NavLink>
        </li>
        <li className="nav-item">
          {/* <a href="#contact">Contact Us</a> */}
          <NavLink  to="/ContactUs" >Contact Us</NavLink>
       </li>
      </ul>
      
    </nav>
    
  );
};

export default Navbar;
