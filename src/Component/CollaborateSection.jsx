import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

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


   const [result, setResult] = useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending...");
    
      const formData = new FormData(event.target);
      formData.append("access_key", "2fa27e0b-8a81-4d9e-a54b-fe5f8e1e3314");
    
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully!");
          event.target.reset(); // Clear form
          toast.success("Form submitted successfully!");
        } else {
          console.error("Error:", data);
          setResult(`❌ ${data.message}`);
          toast.error(`❌ ${data.message}`);
        }
      } catch (error) {
        console.error("Request failed:", error);
        setResult("❌ An error occurred while submitting.");
        toast.error("❌ An error occurred while submitting.");
      }
    };
  return (
    <section
      style={{
        backgroundColor: "1A1A1A",
        color: "white",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <ToastContainer position="top-right" autoClose={3000} />
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
          <h2 style={{ fontSize: isMobile ? "32px" : "48px", fontWeight: "400", marginBottom: "15px", lineHeight: "50px", letterSpacing: "4%" }}>
            LET’S <br />
            <span>COLLABORATE!</span>
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
            onSubmit={onSubmit}
          >
            <input type="text" placeholder="Name" name="name" style={inputStyle} />
            <input type="email" placeholder="E-mail ID" name="email" style={inputStyle} />
            <input type="tel" placeholder="Contact Number" name="phone" style={inputStyle} />
            <input type="text" placeholder="Company Name" name="company" style={inputStyle} />
            <textarea placeholder="Message" name="message" style={{ ...inputStyle, height: "100px" }} />
            <input type="text" name="honeypot" style={{ display: "none" }} />
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
