import React from "react";
import "./footer.css";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import footerlogo from "../../Images/Logo.png";
function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-container">
          <div className="footer-details">
            <p className="footer-name">
              <i>Eugine Mushieni Indakwa</i>{" "}
            </p>

            <a
              href="mailto:indakwa@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="footer-email"
            >
              indakwa@gmail.com
            </a>

            <div className="footer-links">
              <a
                href="https://www.linkedin.com/in/eugine-mushieni-indakwa-8702b5244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
                className="linked"
              >
                <BsLinkedin className="footer-icons" />
              </a>

              <a
                href="https://x.com/MushieniIndakwa?t=1OmTaVThx97U3XNb9IOHcg&s=09"
                target="_blank"
                rel="noreferrer"
                className="linked"
              >
                <RiTwitterXFill className="footer-icons" />
              </a>

              <a
                href="https://instagram.com/_indakwa_?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
                rel="noreferrer"
                className="linked"
              >
                <BsInstagram className="footer-icons" />
              </a>
            </div>
          </div>

          <div className="footer-logo">
            <img src={footerlogo} alt="logo" className="footer-logo-img" />
          </div>

          <div className="footer-design">
            <p className="crafted">Crafted By</p>
            <a
              href="tel:+254791618714"
              className="designer"
              target="_blank"
              rel="noreferrer"
            >
              Wanjie Ryan
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
