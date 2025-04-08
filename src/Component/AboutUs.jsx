import React, { useState, useEffect } from "react";
import "../CSS/AboutUs.css";
import "../CSS/Cards.css";


const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    {
      title: "JACKETS",
      text: "01 Tailored styles with embroidery, prints, and appliqué.",
    },
    {
      title: "T-SHIRTS & SHIRTS",
      text: "02 Versatile designs with graphic prints, and embellishments.",
    },
    {
      title: "DENIM JEANS",
      text: "03 Premium jeans with expert craftsmanship, unique washes, and refined detailing.",
    },
    {
      title: "SHORTS AND TROUSERS",
      text: "04 Versatile bottoms crafted with premium fabrics, and modern silhouettes.",
    },
    {
      title: "DRESSES & TOPS",
      text: "05 Elegant designs with prints, embroidery, lace, and pleating.",
    },
    {
      title: "JUMPSUITS",
      text: "06 Chic jumpsuits with tailored draping, cut-out detailing, and stretch fabrics.",
    },
    {
      title: "ACTIVE WEAR",
      text: "07 Activewear featuring moisture-wicking fabrics, and breathable mesh.",
    },
    {
      title: "WINTERWEAR",
      text: "08 Cozy styles with quilting, prints, and woven textures.",
    },
  ];

 // Categories for comparison cards
 const cardCategories = ['MOQ', 'Lead Time', 'Price', 'Fit/Approval', 'Overall TAT'];
  
 const comparisonData = {
   middle: {
     others: ['500+', '120 Days', 'High', '6–8 Weeks', '6 to 8 months (traditional)'],
     raised: ['100+', '30 to 45 Days', 'As brands price architecture', 'Done at source', '3 months total']
   },
   right: [
     'Lower markdowns, higher full-price sales',
     'Can trial more styles',
     'Launch more drops (e.g. monthly)',
     'Based on current trends',
     'Selection of fabric/style within brand pricing',
     'Better bottom line, less loss of margin',
     'Based on proven blocks, not new title',
     'Faster approval with tech',
     'Faster sampling & production',
     'Efficient drops & delivery'
   ]
 };

  return (
    <div className="aboutUsContainer">
      {/* OUR STORY */}
      <div className="storyContent" id="story">
        <h2 className="sectionHeading">OUR STORY</h2>
        <div className="storyText">
          <p>
            <span>
              At Raised Apparels, design-to-delivery isn’t just a process—it’s
              our promise. We redefine the apparel landscape with cutting-edge,
              eco-conscious, and trend-driven solutions, ensuring brands receive
              seamless, end-to-end services from concept to final product.{" "}
            </span>
            <br />
            <span>
              Our expertise spans trend research, concept creation, product
              development, manufacturing, and quality control—all under one
              roof. By blending creativity, ethics, and precision, we empower
              brands with innovative, sustainable, and trend-focused products
              that uphold ethical practices and environmental responsibility.
            </span>
            <br />
            <span>
              As a global leader in design-to-delivery, we don’t just make
              apparel; we craft experiences that inspire and resonate, exceeding
              expectations at every stage
            </span>
          </p>
        </div>
      </div>

      {/* DESIGN TO DELIVERY */}
      <div className="design">
        <h2 className="sectionHeading">DESIGN TO DELIVERY</h2>
        <ul className="deliveryList">
          <li className="deliveryItem">
            <span>Trend Research & Concept Development</span>
            <br />
            Staying ahead with data-driven insights and innovative designs that
            align with market demands.
          </li>
          <li className="deliveryItem">
            <span>Custom Production</span>
            <br />
            Tailored apparel with unmatched customization options to suit your
            brand’s identity and audience preferences.
          </li>
          <li className="deliveryItem">
            <span>Seasonal Collections</span>
            <br />
            Trend-inspired collections designed to captivate and keep your brand
            relevant.
          </li>
          <li className="deliveryItem">
            <span>Branding Options</span>
            <br />
            Exclusive labels, tags, and packaging that enhance your product’s
            appeal and reflect your brand’s identity.
          </li>
          <li className="deliveryItem">
            <span>Flexible MOQs</span>
            <br />
            Adaptable minimum order quantities to cater to businesses of all
            sizes.
          </li>
          <li className="deliveryItem">
            <span>Real-Time Order Tracking</span>
            <br />A tech-driven process ensuring transparency and efficient
            management throughout production.
          </li>
        </ul>
      </div>
 {/* Cards section */}
 <div className="cards-container">
        {/* Left Card - Categories */}
        <div className="card left">
          <h3 className="card-title">Categories</h3>
          <div className="card-content">
            {cardCategories.map((category, index) => (
              <div key={index} className="category-item">{category}</div>
            ))}
          </div>
        </div>

        {/* Middle Card - Comparison */}
        <div className="card middle">
          <h3 className="card-title">Comparison</h3>
          <div className="card-content">
            <div className="comparison-row header">
              <div>Others Manufacturers</div>
              <div>RAISED APPARELS</div>
            </div>
            {cardCategories.map((_, index) => (
              <div key={index} className="comparison-row">
                <div>{comparisonData.middle.others[index]}</div>
                <div>{comparisonData.middle.raised[index]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card - Advantages */}
        <div className="card right">
          <h3 className="card-title">Advantages</h3>
          <div className="card-content">
            <ul className="advantages-list">
              {comparisonData.right.map((advantage, index) => (
                <li key={index}>{advantage}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

     

      {/* CERTIFICATIONS */}
      <div className="cerification">
        <h2 className="sectionHeading">CERTIFICATIONS</h2>
        <div className="certificationsGrid">
          {/* Individual container for each logo */}
          <div className="certificationLogo">
            <img src="/bci logo.png" className="certificationLogo-img" />
          </div>
          <div className="certificationLogo">
            <img src="/fsc logo.png" className="certificationLogo-img" />
          </div>
          <div className="certificationLogo">
            <img src="/sedex logo.png" className="certificationLogo-img" />
          </div>
        </div>
      </div>

      {/* MEET OUR TEAM */}
      {/* <div id="team">
        <h2 className="sectionHeading">MEET OUR TEAM</h2>
        <div className="teamGrid">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div key={id} className="teamMember">
              <div className="memberImage"></div>
              <p>Team Member {id}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* CLIENTS */}
      <div className="clients">
        <h2 className="sectionHeading">CLIENTS</h2>
        <div className="clientsImage">
          <img src="/logo bw.png" alt="Clients" className="desktop-img" />
          <img src ="/mobile client.png" className="mobile-client" />
        </div>
      </div>

      {/* GALLERY */}
      {/* <div id="gallery">
        <h2 className="sectionHeading">GALLERY</h2>
        <div className="galleryGrid">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div key={id} className="galleryImage"></div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
