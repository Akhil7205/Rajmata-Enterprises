import React from "react";
import "./Header.css";
import { useState } from "react";
import logo from "./img/image.png";
import Navbar from "../Navbar/Navbar";
// import { NavLink } from 'react-router-dom';


  


const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    < header className="header">
      
      <div className="header-info">
    
        <div className="logoName">
          <img src={logo} class="logoimg" alt="" />
          <h1 className="logoh1"><strong>Rajmata</strong> <br /> Enterprises Security </h1>
        </div>
        <div className='mix'>
 <div className="rightside">
            <div className="Clock">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                style={{ width: "35px", color: "#F4C85E" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span>
                WORKING HOURS <br /> <span style={{ color:"#5A4001" }}>"24 X 7
                  </span>
              </span>
              {/* <span>WORKING HOURS 24 X 7</span> */}
            </div>
            <div className="Mail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                style={{ width: "35px", color: "#F4C85E" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            <span>
              MAIL US <br /> 
              <span style={{ color:"#5A4001" }}>rajmataenterprises2014@gmail.com</span>
            </span>
            </div>
        </div>

        <div className="header-alert">
         <p className="p-alert">ALERT:</p>
          <marquee>
            Formerly Known As Rajmata Enterprises &nbsp;&nbsp; Since - 2014.
          </marquee>
        </div>
        

        </div>
        <div className="hamburger" onClick={toggleNavbar}>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
<path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
</svg>
      </div>
      </div>
      
    </header>
  );
};

export default Header;
