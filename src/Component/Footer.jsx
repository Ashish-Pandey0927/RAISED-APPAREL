import React, { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaPhone } from "react-icons/fa";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer
      style={{
        backgroundColor: "#FF652F", // Matching background color
        color: "white",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      {/* Container for Columns */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: isMobile ? "center" : "flex-start",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        {/* Left Column - Logo & Info */}
        <div
          style={{
            minWidth: "300px",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ fontSize: "24px", fontWeight: "bold", lineHeight: ".9" }}>
            RAISED <br /> APPAREL
          </h2>
          <p
            style={{
              fontSize: "14px",
              marginTop: "20px",
              fontWeight: "100",
              lineHeight: "1.5",
              wordWrap: "break-word",
            }}
          >
            Your trusted partner in <br /> fashion, <br />
            no matter the size.
          </p>

          {/* Social Icons */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "15px",
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <FaFacebook size={20} />
            <FaLinkedin size={20} />
            <FaPhone size={20} />
          </div>
        </div>

        {/* Company Section */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>COMPANY</h3>
          <p style={linkStyle}>Our story</p>
          <p style={linkStyle}>Team</p>
          <p style={linkStyle}>Gallery</p>
        </div>

        {/* Catalog Section */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>CATALOG</h3>
          <p style={linkStyle}>Menswear</p>
          <p style={linkStyle}>Womenswear</p>
          <p style={linkStyle}>Kids wear</p>
          <p style={linkStyle}>Streetwear</p>
        </div>

        {/* Support Section */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>SUPPORT</h3>
          <p style={linkStyle}>FAQs</p>
          <p style={linkStyle}>Contact Us</p>
          <p style={linkStyle}>Get Quotes</p>
        </div>
      </div>
    </footer>
  );
};

// Common Styles
const columnStyle = {
  flex: "1",
  minWidth: "150px",
  marginBottom: "20px",
};

const headingStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const linkStyle = {
  fontSize: "14px",
  marginBottom: "5px",
  cursor: "pointer",
};

export default Footer;
