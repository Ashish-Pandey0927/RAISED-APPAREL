import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        display: "flex",
        zIndex: "40",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ff6431",
        padding: "1.5rem 2rem",
        position: "relative",
      }}
    >
      {/* Logo */}
      <a href="/">
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "white",
            position: "relative",
            lineHeight: "1",
            letterSpacing: "0.4px",
          }}
        >
          RAISED <br /> APPAREL
        </p>
      </a>

      {/* Desktop Navigation */}
      <div
        style={{
          display: menuOpen ? "flex" : "none",
          zIndex: "40",
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
        <a href="/about" className="nav-link">About</a>
        <a href="/catalog" className="nav-link">Catalog</a>
        <a href="/blog" className="nav-link">Blog</a>
        <a href="/contact" className="nav-link">Contact</a>
      </div>

      {/* Desktop Navigation (Visible on large screens) */}
      <div style={{ display: "flex", gap: "15px" }} className="desktop-menu">
        <a href="/about" className="nav-link">About</a>
        <a href="/catalog" className="nav-link">Catalog</a>
        <a href="/blog" className="nav-link">Blog</a>
        <a href="/contact" className="nav-link">Contact</a>
      </div>

      {/* Hamburger Menu (Visible on small screens) */}
      <div
        style={{ display: "none", cursor: "pointer", fontSize: "2rem", color: "white" }}
        className="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Styles */}
      <style>
        {`
          .nav-link {
            padding: 1rem;
            color: white;
            text-decoration: none;
            font-weight: thin;
            transition: 0.3s;
            position: relative;
          }

          .nav-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 100%;
            height: 2px;
            background-color: white;
            transform: scaleX(0);
            transition: transform 0.3s ease-in-out;
          }

          .nav-link:hover::after {
            transform: scaleX(1);
          }

          @media (max-width: 768px) {
            .desktop-menu { display: none !important; }
            .mobile-menu { display: block !important; }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
