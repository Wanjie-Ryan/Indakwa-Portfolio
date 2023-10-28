import React from "react";
import "./services.css";

function Services() {
  return (
    <>
      <section id="services" className="services-section">
        <h1 className="service-title">What does Eugine do?</h1>

        <div className="services-container">
          <div className="interest">
            <h3 className="title-service">Areas of Interest</h3>

            <p>&#x2BC1; Employment Law</p>
            <p>&#x2BC1; Conveyancing</p>
            <p>&#x2BC1; International Environmental Law and Policy</p>
            <p>&#x2BC1; Tax Law</p>
            <p>&#x2BC1; Civil and Criminal Law</p>
            <p>&#x2BC1; Alternative Dispute Resolution</p>
          </div>

          <div className="interest">
            <h3 className="title-service">Achievements And Work done</h3>

            <p>&#x2BC1; Student Assistant; Strathmore University Library</p>
            <p>&#x2BC1; Internal univeristy Mooting</p>
            <p>&#x2BC1; Student Academic Senator; 14th Student Council </p>
            <p>&#x2BC1; Legal Intern, Judiciary; Butere Law Courts</p>
            <p>
              &#x2BC1; Legal Intern, Muyao, Munthama, and Kashindi Advocates
            </p>
            <p>&#x2BC1; Founder "Haki ya Hakika"</p>
          </div>

          <div className="interest">
            <h3 className="title-service">Papers Done</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
