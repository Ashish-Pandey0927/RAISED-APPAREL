import React from "react";

const WhyChooseUs = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "8rem 12rem",
        textAlign: "center",
      }}
      className="why-choose-container"
    >
      {/* Heading */}
      <h2 style={headingStyle}>Why Choose Us?</h2>

      {/* Cards Container */}
      <div style={gridContainerStyle}>
        {[
          { title: "Customisation" },
          { title: "Fast Delivery" },
          { title: "Flexible MOQs" },
        ].map((item, index) => (
          <div key={index} style={cardStyle}>
            {/* Image Placeholder */}
            <div style={imagePlaceholderStyle}>
              <span style={imageTextStyle}>image</span>
            </div>

            {/* Title */}
            <h3 style={cardTitleStyle}>{item.title}</h3>

            {/* Button */}
            <button style={buttonStyle}>KNOW MORE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline styles
const headingStyle = {
  fontSize: "3rem",
  fontWeight: "400",
  lineHeight: "105px",
  marginBottom: "2.5rem",
};

const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "2rem",
  justifyContent: "center",
};

const cardStyle = {
  backgroundColor: "#1F2937", // Gray-800
  borderRadius: "15px",
  maxWidth: "350px",
  padding: "1.5rem",
  margin: "0 auto",
  textAlign: "center",
};

const imagePlaceholderStyle = {
  width: "100%",
  height: "160px",
  backgroundColor: "#374151", // Gray-700
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  marginBottom: "2rem",
};

const imageTextStyle = {
  color: "#EF4444", // Red-400
  fontStyle: "italic",
};

const cardTitleStyle = {
  fontSize: "1.2rem",
  fontWeight: "600",
  marginBottom: "1rem",
};

const buttonStyle = {
  backgroundColor: "#ff6431",
  color: "white",
  padding: "0.5rem 1.5rem",
  borderRadius: "999px",
  fontWeight: "600",
  border: "none",
  cursor: "pointer",
  transition: "background 0.3s",
};

buttonStyle[":hover"] = {
  backgroundColor: "#e55328",
};

// Media Query for Responsiveness
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `@media (max-width: 1024px) {
    .why-choose-container { padding: 6rem 6rem !important; }
    .why-choose-container h2 { font-size: 2.5rem !important; }
    .why-choose-container div { grid-template-columns: repeat(2, 1fr) !important; }
  }`,
  styleSheet.cssRules.length
);
styleSheet.insertRule(
  `@media (max-width: 768px) {
    .why-choose-container { padding: 4rem 3rem !important; }
    .why-choose-container h2 { font-size: 2rem !important; }
    .why-choose-container div { grid-template-columns: 1fr !important; }
  }`,
  styleSheet.cssRules.length
);
styleSheet.insertRule(
  `@media (max-width: 480px) {
    .why-choose-container { padding: 3rem 1.5rem !important; }
    .why-choose-container h2 { font-size: 1.8rem !important; }
  }`,
  styleSheet.cssRules.length
);

export default WhyChooseUs;
