import React from "react";

// Function to check if the device is mobile
const isMobile = () => window.innerWidth <= 768;

const Contact = () => {
  const containerStyle = {
    backgroundColor: "black",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2.5rem 0",
  };

  const container = {
    background: "linear-gradient(to bottom, #FF5733, black)",
    padding: isMobile() ? "1.5rem" : "2.5rem",
    borderRadius: "10px",
    width: isMobile() ? "90%" : "50%",
    maxWidth: "950px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const formContainerStyle = {
    borderRadius: "10px",
    width: "100%",
  };

  const headingStyle = {
    fontSize: isMobile() ? "2rem" : "3.5rem",
    lineHeight: isMobile() ? "1.2" : "91px",
    fontWeight: "400",
    color: "white",
    textAlign: "left",
    letterSpacing: "0em",
    marginBottom: "1.5rem",
  };

  const textStyle = {
    color: "white",
    textAlign: "left",
    marginBottom: "1.5rem",
    fontSize: isMobile() ? "14px" : "16px",
  };

  const inputStyle = {
    padding: "0.75rem",
    backgroundColor: "#bc5c3d",
    color: "white",
    borderRadius: "8px",
    outline: "none",
    border: "none",
    marginBottom: "0.75rem",
    width: "100%",
  };

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "0.75rem 1.5rem",
    borderRadius: "25px",
    fontWeight: "600",
    cursor: "pointer",
    border: "none",
    marginTop: isMobile() ? "1.5rem" : "1rem",
  };

  const mapContainerStyle = {
    marginTop: isMobile() ? "1.5rem" : "2rem",
    width: "100%",
    borderRadius: "10px",
    overflow: "hidden",
  };

  return (
    <div style={containerStyle}>
      <div style={container}>
        <div style={formContainerStyle}>
          <h2 style={headingStyle}>LET'S <br /> COLLABORATE !!!</h2>
          <p style={textStyle}>
            Ready to create something extraordinary? Whether you're looking for custom designs, bulk production, or end-to-end apparel solutions, we're here to help. Get in touch with our team today to get started on your next collection.
          </p>

          <div style={{ display: "flex", flexDirection: isMobile() ? "column" : "row", gap: "1rem" }}>
            <div style={{ width: isMobile() ? "100%" : "50%" }}>
              <input type="text" placeholder="Name" style={inputStyle} />
              <input type="email" placeholder="E-mail ID" style={inputStyle} />
              <input type="tel" placeholder="Contact Number" style={inputStyle} />
              <input type="text" placeholder="Company Name" style={inputStyle} />
            </div>
            <textarea 
              placeholder="Message" 
              style={{ 
                ...inputStyle, 
                height: isMobile() ? "150px" : "230px", 
                width: isMobile() ? "100%" : "50%" 
              }} 
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button style={buttonStyle}>SUBMIT</button>
          </div>
        </div>

        <div style={mapContainerStyle}>
          <iframe
            title="location"
            style={{ width: "100%", height: "300px", borderRadius: "10px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.357775627057!2d-122.41941548468151!3d37.77492927975939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c4c1b0b0b%3A0x0!2zMzfCsDQ2JzI5LjgiTiAxMjLCsDI1JzA2LjEiVw!5e0!3m2!1sen!2sus!4v1649001723011!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;