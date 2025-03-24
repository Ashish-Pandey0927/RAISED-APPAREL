import React from "react";
import "../CSS/Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "mailto:hello@raisedapparels.com";
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <form
          className="form-container"
          onSubmit={handleSubmit}
          action="mailto:hello@raisedapparels.com"
          method="POST"
          enctype="text/plain"
        >
          <h2 className="heading">
            LET'S <br /> COLLABORATE !!!
          </h2>
          <p className="text">
            Ready to create something extraordinary? Whether you're looking for
            custom designs, bulk production, or end-to-end apparel solutions,
            we're here to help. Get in touch with our team today to get started
            on your next collection.
          </p>

          <div className="input-box">
            <div className="leftside">
              <input
                type="text"
                placeholder="Name"
                className="input"
                name="name"
                required
              />
              <input
                type="email"
                placeholder="E-mail ID"
                className="input"
                name="email"
                required
              />
              <input
                type="tel"
                placeholder="Contact Number"
                className="input"
                name="phone"
                required
              />
              <input
                type="text"
                placeholder="Company Name"
                className="input"
                name="company"
              />
              <textarea
                placeholder="Message"
                className="input"
                name="message"
                required
              />
            </div>
            <div className="email-box">
              <h2>CONTACT US @</h2>
              <p>hello@raisedapparels.com</p>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit" className="button">
              SUBMIT
            </button>
          </div>
        </form>

        <div className="map-container">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.9933090045165!2d77.6232174!3d12.902596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15701b21941f%3A0x76ee7fd15654b077!2sRaised%20On%20Denim%20India!5e1!3m2!1sen!2sin!4v1741620265554!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
