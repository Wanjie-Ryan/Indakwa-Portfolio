import React, { useState } from "react";
import "./nav.css";
import Logo from "../../Images/Logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { FaWindowClose } from "react-icons/fa";
function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <div className="site-logo">
            <div className="logo-container">
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

          <div className="menu-div" onClick={openSidebar}>
            <BiMenuAltRight className="menu" />
          </div>
        </div>
      </nav>

      {isSidebarOpen && (
        <aside className="aside active">
          <div className="close-btn" onClick={closeSidebar}>
            <FaWindowClose className="close" />
          </div>

          <div className="aside-container">
            <div className="aside-links">
              <a href="#home">Home</a>
            </div>
            <div className="aside-links">
              <a href="#about">About</a>
            </div>
            <div className="aside-links">
              <a href="#services">Services</a>
            </div>
            <div className="aside-links">
              <a href="#contact">Contact</a>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}

export default Navbar;
