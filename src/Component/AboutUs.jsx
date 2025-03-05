import React, { useState, useEffect } from "react";

const isMobile = () => window.innerWidth <= 768;

const AboutUs = () => {
    const [mobileView, setMobileView] = useState(isMobile());

    useEffect(() => {
        const handleResize = () => setMobileView(isMobile());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const categories = [
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
        <div style={{ background: "#111", color: "white", padding: "2rem" }}>
            <div style={{ background: "#222", padding: "2rem", textAlign: "center", marginTop: "20px", borderRadius: "10px" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>OUR STORY</h2>
                <p style={{ maxWidth: "auto", margin: "auto", lineHeight: "1.5", textAlign: "left", display: "flex", flexDirection: "column" }}>
                <span>At Raised Apparels, design-to-delivery isn’t just a process—it’s our promise. We redefine the apparel landscape with cutting-edge, eco-conscious, and trend-driven solutions, ensuring brands receive seamless, end-to-end services from concept to final product. </span> <br />

<span >Our expertise spans trend research, concept creation, product development, manufacturing, and quality control—all under one roof. By blending creativity, ethics, and precision, we empower brands with innovative, sustainable, and trend-focused products that uphold ethical practices and environmental responsibility.</span> <br />

 <span >As a global leader in design-to-delivery, we don’t just make apparel; we craft experiences that inspire and resonate, exceeding expectations at every stage</span>
                </p>
            </div>

            <div style={{ background: "#222", padding: "2rem", marginTop: "20px", borderRadius: "10px", textAlign: "center" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>DESIGN TO DELIVERY</h2>
                <ul
          style={{
            maxWidth: "800px",
            margin: "auto",
            textAlign: "left",
            lineHeight: "1.8",
          }}
        >
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

            <div style={{ background: "#111", color: "white", padding: "2rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: mobileView ? "1fr" : "1fr 1fr", gap: "0.5rem" }}>
                    {categories.map((category, index) => (
                        <div key={index} style={{ display: "flex", alignItems: "center" }}>
                            {index % 2 === 0 ? (
                                <>
                                    <h2 style={{ padding: mobileView ? "0 1rem" : "0px 2rem 0px 30rem" }}>{category.title}</h2>
                                    <div style={{ background: "#ff6431", color: "white", padding: "1rem", flex: 1 }}>
                                        <p>{category.text}</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div style={{ background: "#ff6431", color: "white", padding: "1rem", flex: 1, textAlign: "right" }}>
                                        <p>{category.text}</p>
                                    </div>
                                    <h2 style={{ padding: mobileView ? "0 1rem" : "0px 30rem 0px 2rem" }}>{category.title}</h2>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ marginTop: "40px", textAlign: "center" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>MEET OUR TEAM</h2>
                <div style={{ display: "grid", gridTemplateColumns: mobileView ? "1fr 1fr" : "1fr 1fr 1fr 1fr", gap: "20px", marginTop: "20px" }}>
                    {[1, 2, 3, 4, 5, 6].map((id) => (
                        <div key={id} style={{ background: "#333", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
                            <div style={{ background: "#555", height: "150px", borderRadius: "10px", marginBottom: "10px" }}>Image</div>
                            <p>Team Member {id}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ marginTop: "40px", textAlign: "center" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>CLIENTS</h2>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px", marginTop: "20px" }}>
                    {["ASOS", "Topman", "Reiss", "AJIO", "Jack & Jones", "Only", "Myntra", "Vero Moda"].map((client) => (
                        <span key={client} style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{client}</span>
                    ))}
                </div>
            </div>
            <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>GALLERY</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile() ? "1fr 1fr" : "1fr 1fr 1fr",
            gap: "20px",
            marginTop: "20px",
          }}
        >
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
