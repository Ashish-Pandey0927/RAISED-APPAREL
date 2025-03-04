import React from "react";
import { FaSearch, FaBrain, FaTshirt, FaCubes, FaBox, FaCheckCircle } from "react-icons/fa";

const steps = [
  { name: "Trend Research & Concept Creation", icon: <FaSearch />, position: { x: 100, y: 270 }, align: "up" },
  { name: "Sampling & Refining", icon: <FaBrain />, position: { x: 320, y: 300 }, align: "down" },
  { name: "Fabric Selection & Sourcing", icon: <FaTshirt />, position: { x: 440, y: 480 }, align: "down" },
  { name: "Bulk Production", icon: <FaCubes />, position: { x: 580, y: 340 }, align: "up" },
  { name: "Branding & Packaging", icon: <FaBox />, position: { x: 690, y: 160 }, align: "up" },
  { name: "Delivery & Fulfillment", icon: <FaCheckCircle />, position: { x: 840, y: 420 }, align: "up" },
];

const HowWeWork = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        padding: "5rem 1rem",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", fontWeight: "600", marginBottom: "4rem", textAlign: "center" }}>
        How We Work
      </h2>

      <div style={{ width: "100%", maxWidth: "900px", overflow: "hidden" }}>
        <svg viewBox="0 0 950 640" style={{ width: "100%", height: "auto" }}>
          {/* Original SVG Path */}
          <path
            d="M 100 250 q 100 -300 250 150, 
               M 350 400 q 100 300 250 -150, 
               M 600 250 q 100 -300 250 150"
            stroke="white"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray="12 12"
          />

          {/* Icons & Labels */}
          {steps.map((step, index) => (
            <g key={index}>
              {/* Icon */}
              <foreignObject
                x={step.position.x - 30}
                y={step.align === "up" ? step.position.y - 60 : step.position.y}
                width="60"
                height="60"
                style={{
                  transform: "scale(1)",
                  transition: "transform 0.3s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "3.5rem",
                    height: "3.5rem",
                    backgroundColor: "#333",
                    borderRadius: "50%",
                    color: "white",
                    fontSize: "1.8rem",
                    
                  }}
                >
                  {step.icon}
                </div>
              </foreignObject>

              {/* Text */}
              <foreignObject
                x={step.position.x - 75}
                y={step.align === "up" ? step.position.y - 5 : step.position.y + 80}
                width="150"
                height="150"
              >
                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: "1rem",
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  {step.name}
                </div>
              </foreignObject>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default HowWeWork;
