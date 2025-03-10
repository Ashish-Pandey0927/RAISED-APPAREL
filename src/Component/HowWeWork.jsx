import React, { useState, useEffect } from "react";
import { FaSearch, FaBrain, FaTshirt, FaCubes, FaBox, FaCheckCircle } from "react-icons/fa";
import desktopDiagram from "/Group 21.png"; // Desktop image
import mobileDiagram from "/Group 62.png"; // Mobile-optimized image


// const steps = [
//   { name: "Trend Research & Concept Creation", icon: <FaSearch />, position: { x: 10.5, y: 42.2 }, align: "up" },
//   { name: "Sampling & Refining", icon: <FaBrain />, position: { x: 33.7, y: 46.9 }, align: "down" },
//   { name: "Fabric Selection & Sourcing", icon: <FaTshirt />, position: { x: 46.3, y: 75 }, align: "down" },
//   { name: "Bulk Production", icon: <FaCubes />, position: { x: 61.1, y: 53.1 }, align: "up" },
//   { name: "Branding & Packaging", icon: <FaBox />, position: { x: 72.6, y: 25 }, align: "up" },
//   { name: "Delivery & Fulfillment", icon: <FaCheckCircle />, position: { x: 88.4, y: 65.6 }, align: "up" },
// ];

const HowWeWork = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#1A1A1A",
      color: "white",
      padding: isMobile ? "2rem" : "4rem 10rem",
      position: "relative",
    }}>
      <h2 style={{
        fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
        fontWeight: "400",
        marginBottom: "2rem",
        textAlign: "center",
        lineHeight: "1.2",
        letterSpacing: "0.5px",
      }}>
        How We Work
      </h2>

      {/* Desktop Diagram */}
      <div className="desktop-diagram" style={{
        width: "100%",
        maxWidth: "1200px",
        position: "relative",
        aspectRatio: "2.48",
        marginBottom: "2.5rem",
      }}>
        <img
          src={desktopDiagram}
          alt="Desktop Process Diagram"
          style={{
            width: "100%",
            objectFit: "contain",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        {/* {steps.map((step, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: `${step.position.x}%`,
              top: `${step.position.y}%`,
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "clamp(1rem, 1.5vw, 1.5rem)", marginBottom: "0.5rem" }}>
              {step.icon}
            </div>
            <div style={{
              fontSize: "clamp(0.75rem, 1vw, 1rem)",
              whiteSpace: "nowrap",
              position: "relative",
              top: step.align === "up" ? "-10px" : "10px",
            }}>
              {step.name}
            </div>
          </div>
        ))} */}
      </div>

      {/* Mobile Diagram */}
      <div className="mobile-diagram" style={{
        display: "none",
        width: "100%",
        maxWidth: "600px",
        position: "relative",
        aspectRatio: "0.8", // Adjust based on your mobile image aspect ratio
        margin: "2rem 0",
      }}>
        <img
          src={mobileDiagram}
          alt="Mobile Process Diagram"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .desktop-diagram {
              display: none !important;
            }
            .mobile-diagram {
              display: block !important;
            }
          }
          @media (min-width: 769px) {
            .mobile-diagram {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HowWeWork;