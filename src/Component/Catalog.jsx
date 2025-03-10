import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const products = [
  // ... (keep products array the same)
  {
    name: "MENSWEAR",
    image: "https://image.hm.com/assets/hm/2a/9b/2a9b011888799bb1207585b81a67f0f58f2ea61d.jpg?imwidth=1536",
    link: "/menswear",
  },
  {
    name: "WOMENSWEAR",
    image: "https://image.hm.com/assets/hm/6b/ce/6bce18066bdf5351a3b41a36ae7cecc2a2586931.jpg?imwidth=1536",
    link: "/womenswear",
  },
  {
    name: "KIDSWEAR",
    image: "/FOOTER KIDSWEAR-20250308T172635Z-001/FOOTER KIDSWEAR/AP0288.jpg",
    link: "/kidswear",
  },
  {
    name: "STREETWEAR",
    image: "https://images.unsplash.com/photo-1594035795389-9363dd86b113?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/streetwear",
  },
];

const Catalog = () => {
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
      backgroundColor: "#1A1A1A",
      color: "white",
      padding: isMobile ? "1rem 0.5rem" : "2rem",
      textAlign: "center",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
        gap: "1rem",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {products.map((product, index) => (
          <Link key={index} to={product.link} style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{
              position: "relative",
              borderRadius: "0.75rem",
              overflow: "hidden",
              backgroundColor: "#222",
              padding: "1rem",
              transition: "transform 0.3s ease",
              aspectRatio: "1/1",
              ":hover": {
                transform: "translateY(-3px)"
              }
            }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%", height: "90%", objectFit: "cover", borderRadius: "0.5rem", objectPosition: "top",
                }}
              />
               <h3 style={{
                  fontSize: isMobile ? "1rem" : "1.5rem",
                  fontWeight: "600",
                  margin: "1rem"
                }}>
                  {product.name}
                </h3>
              
               
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Catalog;