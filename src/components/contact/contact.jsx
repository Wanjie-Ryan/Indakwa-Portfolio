import React, { useState, useRef } from "react";
import "./contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qk9tbm9",
        "template_7i9342m",
        form.current,
        "0f4fZFS8wPre3XSug"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(`Message was sent successfully!`);
        },
        (error) => {
          console.log(error.text);
          toast.error(`Message was not sent, try again later!`);
        }
      );

    e.target.reset();
  };
  return (
    <>
      <section id="contact" className="contact-container">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
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
