import React from "react";

const AboutSection = () => {
  return (
    <div
      style={{
        backgroundColor: "1A1A1A",
        color: "white",
        padding: "4rem 10rem",
        textAlign: "center",
      }}
      className="about-container"
    >
      {/* Who We Are Section */}
      <div style={{ marginBottom: "3rem" }}>
        <h2 style={headingStyle}>WHO ARE WE?</h2>
        <p style={paragraphStyle}>
        We design ( keeping your brand ethos and targeted customer in mind) with your brand price architecture and speed to market ( dont have to predict fashion) and moq u want ( so no or less discount sell) and react to demand model instead of predictive design.
        It's full service design to delivery , when u want. What u want and how much u want along with sustainable and traceable fashion ( cost neutral).
        </p>
      </div>

      {/* Our Vision Section */}
      <div>
        <h2 style={headingStyle}>OUR VISION</h2>
        <p style={paragraphStyle}>
          The go-to apparel manufacturer for brands looking for a full-service partner that can handle design,
          production, and distribution with precision and speed.
        </p>
      </div>
    </div>
  );
};

// Inline styles
const headingStyle = {
  fontSize: "2rem",
  fontWeight: "700",
  textTransform: "uppercase",
  marginBottom: "1rem",
  textAlign: "left",
};

const paragraphStyle = {
  fontSize: "1.1rem",
  lineHeight: "1.8",
  // maxWidth: "900px",
  textAlign: "left",
  // margin: "0 auto",
};

// Media Query for Responsiveness
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `@media (max-width: 1024px) {
    .about-container { padding: 6rem 6rem !important; }
  }`,
  styleSheet.cssRules.length
);
styleSheet.insertRule(
  `@media (max-width: 768px) {
    .about-container { padding: 4rem 3rem !important; }
    h2 { font-size: 1.8rem !important; }
    p { font-size: 1rem !important; }
  }`,
  styleSheet.cssRules.length
);
styleSheet.insertRule(
  `@media (max-width: 480px) {
    .about-container { padding: 3rem 1.5rem !important; }
    h2 { font-size: 1.6rem !important; }
    p { font-size: 0.95rem !important; }
  }`,
  styleSheet.cssRules.length
);

export default AboutSection;
