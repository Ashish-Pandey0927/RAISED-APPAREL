import React, { useState, useEffect } from "react";

const WhyPerfectFit = () => {
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
    <section
      style={{
        backgroundColor: "#1A1A1A",
        color: "white",
        padding: isMobile ? "24px 30px" : "80px 30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Container for Layout */}
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          textAlign: isMobile ? "center" : "left",
          gap: "40px",
        }}
      >
        {/* Text Section */}
        <div
          style={{
            width: isMobile ? "100%" : "60%",
            maxWidth: "800px",
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? "32px" : "48px",
              fontWeight: "400",
              marginBottom: "20px",
              letterSpacing: "0.4px",
              lineHeight: "54px",
            }}
          >
            WHY ARE WE YOUR <br />
            <span>PERFECT FIT?</span>
          </h2>
          <hr style={{ marginBottom: "20px" }} />

          {/* Features List */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: "15px",
              fontSize: "18px",
              color: "#bbb",
            }}
          >
            <div style={featureStyle}>
              <p> End-to-end Design & Delivery Solutions</p>
              <p> Cost-efficient for both large & small orders</p>
              <p> Comprehensive Product Development</p>
              <p> Trend Analysis & Concept Ideation</p>
            </div>
            <div style={featureStyle}>
              <p> Seasonal & Custom Collections</p>
              <p> Custom Branding & Packaging</p>
              <p> Flexible Minimum Order Quantities (MOQ)</p>
              <p> Exclusive, 100% Customizable Products</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div
          style={{
            width: isMobile ? "100%" : "40%",
            maxWidth: "500px",
            marginTop: isMobile ? "20px" : "0",
          }}
        >
          <img
            src="/jeans image.png"
            alt="Stack of Denim Jeans"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
    </section>
  );
};

const featureStyle = {
  gap: "10px",
  display: "flex",
  flexDirection: "column",
};

export default WhyPerfectFit;
