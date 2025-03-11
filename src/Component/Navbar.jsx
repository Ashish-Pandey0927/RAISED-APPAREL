import React, { useState } from "react";
import logo from "/RAISED APPAREL.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#ff6431",
          padding: ".8rem 2rem",
          position: "sticky",
          top: "0",
          zIndex: "50",
        }}
      >
        {/* Logo */}
        <a href="/" className="logo-container">
          <img src={logo} alt="RAISED APPAREL Logo" className="logo" />
        </a>

        {/* Desktop Navigation */}
        <div style={{ display: "flex", gap: "2rem" }} className="desktop-menu">
          <a href="/about" className="nav-link">About Us</a>
          <a href="/catalog" className="nav-link">Catalog</a>
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/contact" className="nav-link">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          style={{ 
            display: "none", 
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.5rem",
            color: "white"
          }}
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          height: "100vh",
          width: "250px",
          backgroundColor: "#ff6431",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
          zIndex: "100",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem"
        }}
      >
        <button
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "none",
            color: "white",
            fontSize: "1.5rem",
            cursor: "pointer"
          }}
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>
        <a href="/about" className="nav-link">About Us</a>
        <a href="/catalog" className="nav-link">Catalog</a>
        <a href="/blog" className="nav-link">Blog</a>
        <a href="/contact" className="nav-link">Contact</a>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: "99",
          }}
          onClick={() => setMenuOpen(false)}
        />
      )}

      <style>
        {`
          .logo-container {
            display: flex;
            align-items: center;
            max-width: 150px;
          }

          .logo {
            width: 100%;
            height: auto;
            max-height: 60px;
          }

          .nav-link {
            padding: 0.5rem;
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: opacity 0.2s;
            display: block;
          }

          .nav-link:hover {
            opacity: 0.8;
          }

          @media (max-width: 768px) {
            .desktop-menu { display: none !important; }
            .mobile-menu { display: block !important; }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;