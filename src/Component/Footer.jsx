import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

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
          
            <a href="/" style={{display: "flex", color: "white",
            alignItems: "center",
            maxWidth: "180px"}}><img src="/output-onlinepngtools (5).png" alt="logo" /></a>
          
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
            <FaInstagram size={20} />
          </div>
        </div>

        {/* Company Section */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>COMPANY</h3>
          <Link smooth to="/about#story" style={{color: "white"}}><p style={linkStyle}>Our story</p></Link>
          {/* <Link smooth to="/about#team" style={{color: "white"}}><p style={linkStyle}>Team</p></Link> 
          <Link smooth to="/about#gallery" style={{color: "white"}}> <p style={linkStyle}>Gallery</p></Link>  */}
        </div>

        {/* Catalog Section */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>CATALOG</h3>
          <a href="/menswear" style={{color: "white"}}><p style={linkStyle}>Menswear</p></a>
          <a href="/womenswear" style={{color: "white"}}><p style={linkStyle}>Womenswear</p></a>
          <a href="/kidswear" style={{color: "white"}}><p style={linkStyle}>Kids wear</p></a>
          <a href="/streetwear" style={{color: "white"}}><p style={linkStyle}>Athleisurewear </p></a>
        </div>

        {/* Support Section */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>SUPPORT</h3>
          <Link smooth to="/contact" style={{color: "white"}}><p style={linkStyle}>FAQs</p></Link> 
          <Link smooth to="/contact" style={{color: "white"}}><p style={linkStyle}>Contact Us</p></Link> 
          <Link smooth to="/contact" style={{color: "white"}}><p style={linkStyle}>Get Quotes</p></Link> 
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
