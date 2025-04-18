import React, { useState } from "react";
import "./Header.css";
import logo from "./img/image.png";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className="header">
      <div className="header-info">

      <div className="logoName">
  <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>  
    <img src={logo} className="logoimg" alt="Logo" />
    <h1 className="logoh1">
      <strong>Rajmata</strong> <br /> Enterprises Security
    </h1>
  </Link>
</div>


        <div className="mix">
          <div className="rightside">
            <div className="Clock">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "35px", color: "#F4C85E" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>
                WORKING HOURS <br />
                <span style={{ color: "#5A4001" }}>"24 X 7"</span>
              </span>
            </div>

            <div className="Mail">
            <a href="mailto:rajmataenterprises2014@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "35px", color: "#F4C85E" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <span>
                MAIL US <br />
                <span style={{ color: "#5A4001" }}>rajmataenterprises2014@gmail.com</span>
              </span>
            </a>
            </div>
          </div>

          <div className="header-alert">
            <p className="p-alert">ALERT:</p>
            <marquee>
              Formerly Known As Rajmata Enterprises &nbsp;&nbsp; Since - 2014.
            </marquee>
          </div>
        </div>

        
      </div>
    </header>
  );
};

export default Header;
