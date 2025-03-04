import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ff6431",
        padding: "1.5rem 2rem",
        position: "relative",
      }}
    >
      {/* Logo */}
      <p
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "white",
          position: "relative",
          letterSpacing: "0.4px",
        }}
      >
        RAISED APPAREL
      </p>

      {/* Desktop Navigation */}
      <div
        style={{
          display: menuOpen ? "flex" : "none",
          flexDirection: "column",
          position: "absolute",
          top: "100%",
          right: "0",
          backgroundColor: "#ff6431",
          width: "100%",
          textAlign: "center",
          padding: "1rem 0",
        }}
      >
        <a href="#" style={navLinkStyle}>Home</a>
        <a href="#" style={navLinkStyle}>About</a>
        <a href="#" style={navLinkStyle}>Services</a>
        <a href="#" style={navLinkStyle}>Contact</a>
      </div>

      {/* Desktop Navigation (Visible on large screens) */}
      <div style={{ display: "flex", gap: "15px" }} className="desktop-menu">
        <a href="#" style={navLinkStyle}>Home</a>
        <a href="#" style={navLinkStyle}>About</a>
        <a href="#" style={navLinkStyle}>Services</a>
        <a href="#" style={navLinkStyle}>Contact</a>
      </div>

      {/* Hamburger Menu (Visible on small screens) */}
      <div
        style={{ display: "none", cursor: "pointer", fontSize: "2rem", color: "white" }}
        className="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
    </nav>
  );
};

// Inline styles for nav links
const navLinkStyle = {
  padding: "1rem",
  color: "white",
  textDecoration: "none",
  fontWeight: "thin",
};

// Responsive styles using media queries
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `@media (max-width: 768px) {
    .desktop-menu { display: none !important; }
    .mobile-menu { display: block !important; }
  }`,
  styleSheet.cssRules.length
);

export default Navbar;
