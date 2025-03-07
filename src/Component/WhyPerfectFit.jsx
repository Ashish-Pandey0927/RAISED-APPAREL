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
        padding: "80px 30px",
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
            WHY WE ARE YOUR <br />
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
            src="https://s3-alpha-sig.figma.com/img/1ca7/6053/25fee271ef3e8d148e5f9fb92d9ec33d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hHw-OPzGJD~WFOun2P8ZE9c5KDeY8pvwtPT36IzDdbmsRp4iENi16qnvrw3DQRqMLJ1a99QmS5NAcnB8FldoTlb3dNEoKEO12bndxhJaXjDzbisYNk8Ogoi33cFK0AxLTxa1hLlBi~LAirdP~vmDMRdJo0brOhBilPBaKAE0rGyj1BzWAGG0YOCP4Z6OwQ6MNX6OQGAWNmbqfdLrIizmL3W2in4B49HOXKCMI4iwrq981UJiUrrOADgcfeu~lk01Gfhoup2YxvUiuj-84YUXpaEqYND9t48C~7dnmgSQZ61h78FQVlKFiiuHBqb4~hpK6YAuhHxBNKlNzVBORt2gNA__"
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
