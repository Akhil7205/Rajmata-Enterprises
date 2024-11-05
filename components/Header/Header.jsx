import React from "react";
import "./Header.css";
import logo from "./img/image.png";
const Header = () => {
  return (
    < header className="header">
      
      <div className="header-info">
        {/* <img src="" alt="" /> */}
        <div class="logoName">
          <img src={logo} class="logoimg" alt="" />
          <h1><strong>Rajmata</strong> Enterprises Security </h1>
        </div>
        <div class='mix'>
 <div class="rightside">
            <div class="Clock">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                style={{ width: "50px", color: "#5a4001" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span>
                WORKING HOURS <br /> 24 X 7
              </span>
              {/* <span>WORKING HOURS 24 X 7</span> */}
            </div>
            <div class="Mail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                style={{ width: "50px", color: "#5a4001" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            <span>
              MAIL US <br /> rajmataenterprises2014@gmail.com
            </span>
            </div>
        </div>

        <div className="header-alert">
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
