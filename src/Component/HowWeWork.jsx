import React from "react";
import { FaSearch, FaBrain, FaTshirt, FaCubes, FaBox, FaCheckCircle } from "react-icons/fa";
import diagramImage from "/Group 21.png"; // Import your diagram image

const steps = [
  { name: "Trend Research & Concept Creation", icon: <FaSearch />, position: { x: 10.5, y: 42.2 }, align: "up" },
  { name: "Sampling & Refining", icon: <FaBrain />, position: { x: 33.7, y: 46.9 }, align: "down" },
  { name: "Fabric Selection & Sourcing", icon: <FaTshirt />, position: { x: 46.3, y: 75 }, align: "down" },
  { name: "Bulk Production", icon: <FaCubes />, position: { x: 61.1, y: 53.1 }, align: "up" },
  { name: "Branding & Packaging", icon: <FaBox />, position: { x: 72.6, y: 25 }, align: "up" },
  { name: "Delivery & Fulfillment", icon: <FaCheckCircle />, position: { x: 88.4, y: 65.6 }, align: "up" },
];

const HowWeWork = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#1A1A1A",
        color: "white",
        padding: "5rem 1rem",
        position: "relative",
      }}
    >
      <h2 style={{ 
        fontSize: "clamp(1.5rem, 4vw, 2.5rem)", 
        fontWeight: "400", 
        marginBottom: "4rem", 
        textAlign: "center", 
        lineHeight: "1.2",
        letterSpacing: "0.5px" 
      }}>
        How We Work
      </h2>

      <div style={{ 
        width: "100%", 
        maxWidth: "1200px",
        position: "relative",
        aspectRatio: "1.48" // Maintain image aspect ratio (950/640 ≈ 1.48)
      }}>
        {/* Diagram Image */}
        <img
          src={diagramImage}
          alt="Process Diagram"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            position: "absolute",
            top: 0,
            left: 0
          }}
        />

       
      </div>
    </div>
  );
};

export default HowWeWork;