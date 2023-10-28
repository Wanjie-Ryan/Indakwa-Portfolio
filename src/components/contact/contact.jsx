import React from "react";
import "./contact.css";

function Contact() {
  return (
    <>
      <section id="contact" className="contact-container">
        <form className="contact-form">
          <h1 className="send-message">Hey, Let's Engage</h1>

          <div className="inputs">
            <div className="hold-contact">
              <div className="name">
                <label>Name</label>
                <input
                  type="text"
                  required
                  placeholder="enter your name"
                  className="name-text"
                />
              </div>

              <div className="name">
                <label>Email</label>
                <input
                  type="text"
                  className="name-text"
                  required
                  placeholder="enter your email"
                />
              </div>
            </div>

            <div className="name">
              <label>Message</label>
              <textarea className="text-area" placeholder="enter the message" />
            </div>
          </div>

          <div className="btn">
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
