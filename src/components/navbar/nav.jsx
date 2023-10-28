import React from "react";
import "./nav.css";
import Logo from "../../Images/Logo.png";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <div className="site-logo">
            <div className='logo-container'>
            <img src={Logo} alt="logo" className="logo" />
            </div>
          </div>

          <div className="nav-links">
            <div className="home">
              <a href="#home" className="home-p">
                <p>Home</p>
              </a>
            </div>
            <div className="home">
              <a href="#about" className="about">
                <p>About</p>
              </a>
            </div>
            <div className="home">
              <a href="#services" className="service">
                <p>Services</p>
              </a>
            </div>
            <div className="home">
              <a href="#contact" className="contact">
                <p>Contact</p>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
