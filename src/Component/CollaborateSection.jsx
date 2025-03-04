import React, { useState, useEffect } from "react";

const CollaborateSection = () => {
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
        backgroundColor: "black",
        color: "white",
        padding: "80px 20px",
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
          justifyContent: "space-between",
          gap: "30px",
          margin: "0 auto",
        }}
      >
        {/* Left Text Section */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            maxWidth: "500px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h2 style={{ fontSize: isMobile ? "32px" : "40px", fontWeight: "bold", marginBottom: "15px" }}>
            LET’S <br />
            <span style={{ color: "#bbb" }}>COLLABORATE!</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              color: "#bbb",
              padding: isMobile ? "0 10px" : "0",
            }}
          >
            Ready to create something extraordinary? Whether you’re looking for custom designs,
            bulk production, or end-to-end apparel solutions, we’re here to help. Get in touch
            with our team today to get started on your next collection.
          </p>
        </div>

        {/* Right Form Section */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            maxWidth: "500px",
            textAlign: "left",
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <input type="text" placeholder="Name" style={inputStyle} />
            <input type="email" placeholder="E-mail ID" style={inputStyle} />
            <input type="text" placeholder="Contact Number" style={inputStyle} />
            <input type="text" placeholder="Company Name" style={inputStyle} />
            <textarea placeholder="Message" style={{ ...inputStyle, height: "100px" }} />
            <button
              type="submit"
              style={{
                backgroundColor: "#FF6A3D",
                color: "white",
                border: "none",
                padding: "12px",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Input Field Styles
const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#333",
  color: "white",
  fontSize: "16px",
};

export default CollaborateSection;
