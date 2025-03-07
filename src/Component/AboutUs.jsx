import React, { useState, useEffect } from "react";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = [
    // ... (keep categories array the same)
    { title: "JACKETS", text: "01 Tailored styles with embroidery, prints, and appliqué." },
        { title: "T-SHIRTS & SHIRTS", text: "02 Versatile designs with graphic prints, and embellishments." },
        { title: "DENIM JEANS", text: "03 Premium jeans with expert craftsmanship, unique washes, and refined detailing." },
        { title: "SHORTS AND TROUSERS", text: "04 Versatile bottoms crafted with premium fabrics, and modern silhouettes." },
        { title: "DRESSES & TOPS", text: "05 Elegant designs with prints, embroidery, lace, and pleating." },
        { title: "JUMPSUITS", text: "06 Chic jumpsuits with tailored draping, cut-out detailing, and stretch fabrics." },
        { title: "ACTIVE WEAR", text: "07 Activewear featuring moisture-wicking fabrics, and breathable mesh." },
        { title: "WINTERWEAR", text: "08 Cozy styles with quilting, prints, and woven textures." },
  ];

  return (
    <div style={{ 
      background: "#1A1A1A", 
      color: "white", 
      padding: isMobile ? "2rem 1rem" : "2rem 10rem"
    }}>
      {/* OUR STORY */}
      <div style={{ padding: "2rem", textAlign: "center", marginTop: "20px" }}>
        <h2 style={{ fontSize: isMobile ? "32px" : "40px", fontWeight: 400, marginBottom: "80px" }}>
          OUR STORY
        </h2>
        <div style={{ 
          maxWidth: isMobile ? "100%" : "auto",
          lineHeight: 1.5,
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}>
          {/* ... (keep paragraph content the same) */}
          
        <p style={{ maxWidth: "auto", margin: "auto", lineHeight: "1.5", textAlign: "left", gap: "10px", display: "flex", flexDirection: "column" }}>
       <span>At Raised Apparels, design-to-delivery isn’t just a process—it’s our promise. We redefine the apparel landscape with cutting-edge, eco-conscious, and trend-driven solutions, ensuring brands receive seamless, end-to-end services from concept to final product. </span> <br />

       <span >Our expertise spans trend research, concept creation, product development, manufacturing, and quality control—all under one roof. By blending creativity, ethics, and precision, we empower brands with innovative, sustainable, and trend-focused products that uphold ethical practices and environmental responsibility.</span> <br />

        <span >As a global leader in design-to-delivery, we don’t just make apparel; we craft experiences that inspire and resonate, exceeding expectations at every stage</span>
        </p>
        </div>
      </div>

      {/* DESIGN TO DELIVERY */}
      <div style={{ padding: "2rem 0" }}>
        <h2 style={{ fontSize: isMobile ? "32px" : "40px", fontWeight: 400, marginBottom: "80px", textAlign: "center" }}>
          DESIGN TO DELIVERY
        </h2>
        <ul style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: 0,
          listStyle: "none"
        }}>
          {/* ... (keep list items the same) */}
          <li>
            <span style={{ color: "#ff6600", fontWeight: "bold" }}>
              . Trend Research & Concept Development
            </span>
            <br />
            Staying ahead with data-driven insights and innovative designs that align with market demands.
          </li>
          <li>
            <span style={{ color: "#ff6600", fontWeight: "bold" }}>
              . Custom Production
            </span>
            <br />
            Tailored apparel with unmatched customization options to suit your brand’s identity and audience preferences.
          </li>
          <li>
            <span style={{ color: "#ff6600", fontWeight: "bold" }}>
              . Seasonal Collections
            </span>
            <br />
            Trend-inspired collections designed to captivate and keep your brand relevant.
          </li>
          <li>
            <span style={{ color: "#ff6600", fontWeight: "bold" }}>
             . Branding Options
            </span>
            <br />
            Exclusive labels, tags, and packaging that enhance your product’s appeal and reflect your brand’s identity.
          </li>
          <li>
            <span style={{ color: "#ff6600", fontWeight: "bold" }}>
              . Flexible MOQs
            </span>
            <br />
            Adaptable minimum order quantities to cater to businesses of all sizes.
          </li>
          <li>
            <span style={{ color: "#ff6600", fontWeight: "bold" }}>
              . Real-Time Order Tracking
            </span>
            <br />
            A tech-driven process ensuring transparency and efficient management throughout production.
          </li>
        </ul>
      </div>

      {/* CATEGORIES */}
      <div style={{ padding: "2rem 0" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "1rem"
        }}>
          {categories.map((category, index) => (
            <div key={index} style={{
              display: "flex",
              flexDirection: isMobile ? "column" : index % 2 === 0 ? "row" : "row-reverse",
              alignItems: "center",
              gap: "1rem"
            }}>
              <h2 style={{
                fontSize: isMobile ? "24px" : "45px",
                fontWeight: 700,
                margin: 0,
                flexShrink: 0,
                padding: "0 1rem"
              }}>
                {category.title}
              </h2>
              <div style={{
                background: "#ff6431",
                padding: "1rem",
                flexGrow: 1,
                width: isMobile ? "100%" : "auto"
              }}>
                <p style={{ fontSize: "13px", margin: 0 }}>{category.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MEET OUR TEAM */}
      <div style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: isMobile ? "32px" : "40px", fontWeight: 400, marginBottom: "80px", textAlign: "center" }}>
          MEET OUR TEAM
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
          gap: "20px"
        }}>
          {/* ... (keep team members the same) */}
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div
              key={id}
              style={{
                background: "#333",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
                // gridColumn: index >= 4 ? (index === 4 ? "2 / span 3" : "auto") : "auto"

              }}
            >
              <div
                style={{
                  background: "#555",
                  height: "150px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              >
                Image
              </div>
              <p>Team Member {id}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CLIENTS */}
      <div style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: isMobile ? "32px" : "40px", fontWeight: 400, marginBottom: "80px", textAlign: "center" }}>
          CLIENTS
        </h2>
        <div style={{ overflow: "hidden", alignItems: "center", textAlign: "center", display: "flex", justifyContent: "center" }}> 
          <img 
            src="/Icon-img1.png" 
            alt="Clients" 
            style={{ 
              maxWidth: "100%", 
              height: "auto",
              objectFit: "contain" 
            }}
          />
        </div>
      </div>

      {/* GALLERY */}
      <div style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: isMobile ? "32px" : "40px", fontWeight: 400, marginBottom: "80px", textAlign: "center" }}>
          GALLERY
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
          gap: "20px"
        }}>
          {/* ... (keep gallery items the same) */}
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div
              key={id}
              style={{
                background: "#333",
                height: "150px",
                borderRadius: "10px",
              }}
            >
              Image
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;