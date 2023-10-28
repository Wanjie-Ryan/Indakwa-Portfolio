import React from "react";
import "./footer.css";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-container">
          <div className="footer-details">
            <p className="footer-name">
              <i>Eugine Mushieni Indakwa</i>{" "}
            </p>

            <p className="footer-email">indakwa@gmail.com</p>

            <div className="footer-links">
              <a
                href="https://www.linkedin.com/in/eugine-mushieni-indakwa-8702b5244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
                className="linked"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-logo"></div>

          <div className="footer-design"></div>
        </div>
      </section>
    </>
  );
}

export default Footer;
