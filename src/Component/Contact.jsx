import React from "react";
import "../CSS/Contact.css"; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="form-container">
          <h2 className="heading">
            LET'S <br /> COLLABORATE !!!
          </h2>
          <p className="text">
            Ready to create something extraordinary? Whether you're looking for
            custom designs, bulk production, or end-to-end apparel solutions,
            we're here to help. Get in touch with our team today to get started
            on your next collection.
          </p>

          <div
          className="input-box"
            // style={{
            //   display: "flex",
            //   flexDirection: "row",
            //   gap: "1rem",
            // }}
          >
            <div
            className="leftside"
            //  style={{ width: "50%" }}
             >
              <input type="text" placeholder="Name" className="input" />
              <input type="email" placeholder="E-mail ID" className="input" />
              <input
                type="tel"
                placeholder="Contact Number"
                className="input"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="input"
              />
              <textarea
                placeholder="Message"
                className="input"
                // style={{ height: "130px" }}
              />
            </div>
            <div className="email-box"
              // style={{
              //   display: "flex",
              //   flexDirection: "column",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   width: "50%",
              //   padding: "0.75rem",
              //   backgroundColor: "#bc5c3d",
              //   color: "white",
              //   borderRadius: "8px",
              //   outline: "none",
              //   border: "none",
              //   marginBottom: "0.75rem",
              // }}
            >
              <h2 
              // style={{ textAlign: "center", fontSize: "1.5rem" }}
              >
                CONTACT US @
              </h2>
              <p>hello@raisedapparels.com</p>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="button">SUBMIT</button>
          </div>
        </div>

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