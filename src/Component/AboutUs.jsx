import React, { useState, useEffect, useRef } from "react";
import "../CSS/AboutUs.css";
import "../CSS/Cards.css";

const AboutUs = () => {


  const [isMobile, setIsMobile] = useState(false);
  const [pauseAutoScroll, setPauseAutoScroll] = useState(false);
  const cardsSliderRef = useRef(null);
  const scrollInterval = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    if (isMobile && cardsSliderRef.current && !pauseAutoScroll) {
      const container = cardsSliderRef.current;
      const cards = container.children;
      if (cards.length === 0) return;

      const cardWidth = cards[0].offsetWidth;
      const gap = 10; // Should match your mobile CSS gap
      const scrollAmount = cardWidth + gap;

      scrollInterval.current = setInterval(() => {
        const maxScroll = container.scrollWidth - container.clientWidth;
        const newScrollPos = container.scrollLeft + scrollAmount;
        
        if (newScrollPos >= maxScroll) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollTo({
            left: newScrollPos,
            behavior: 'smooth'
          });
        }
      }, 3000);

      return () => clearInterval(scrollInterval.current);
    }
  }, [isMobile, pauseAutoScroll]);

  // Manual scroll detection
  useEffect(() => {
    const container = cardsSliderRef.current;
    if (!isMobile || !container) return;

    const handleTouchStart = () => {
      setPauseAutoScroll(true);
      clearInterval(scrollInterval.current);
      
      // Resume auto-scroll after 10 seconds of inactivity
      setTimeout(() => {
        setPauseAutoScroll(false);
      }, 10000);
    };

    container.addEventListener('touchstart', handleTouchStart);
    return () => container.removeEventListener('touchstart', handleTouchStart);
  }, [isMobile]);

  // Mobile detection
  useEffect(() => {
    const handleResize = () => {
      const mobileCheck = window.innerWidth <= 768;
      setIsMobile(mobileCheck);
      
      // Reset scroll position on mobile change
      if (mobileCheck && cardsSliderRef.current) {
        cardsSliderRef.current.scrollTo({ left: 0, behavior: 'auto' });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isMobile && !pauseAutoScroll) {
      const interval = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % 3);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isMobile, pauseAutoScroll, activeIndex]);

  // Scroll to active card
  useEffect(() => {
    if (cardsSliderRef.current && isMobile) {
      const cardWidth = cardsSliderRef.current.children[0].offsetWidth;
      cardsSliderRef.current.scrollTo({
        left: activeIndex * (cardWidth + 10),
        behavior: 'smooth'
      });
    }
  }, [activeIndex, isMobile]);

  // Touch handling
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setTouchStart(touch.clientX);
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const diff = touch.clientX - touchStart;
    
    if (Math.abs(diff) > 50) {
      setActiveIndex(prev => diff > 0 ? 
        Math.max(0, prev - 1) : 
        Math.min(2, prev + 1)
      );
    }
  };


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
  const cardCategories = ['MOQ', 'LEAD TIME', 'PRICE', 'FIT/APPROVAL', 'OVERALL TAT'];
  
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
      <div className={`cards-container ${isMobile ? 'mobile-scroll' : ''}`}>
        <div className="cards-slider" 
          ref={cardsSliderRef}
          onTouchMove={() => setPauseAutoScroll(true)}>
          {/* Left Card - Categories */}
          <div className="card left">
            <h3 className="card-titles">Categories</h3>
            <div className="card-content">
              {cardCategories.map((category, index) => (
                <div key={index} className="category-item">{category}</div>
              ))}
            </div>
          </div>

          {/* Middle Card - Comparison */}
          <div className="card middle">
            <h3 className="card-title">
              <div style={{display: "flex", justifyContent: "space-around", gap: "2rem", textAlign: "left", padding: "0", margin: "0px -15px"}} className="comparison-header">
                <div style={{fontSize: "1rem"}} >Others Manufacturers</div>
                <div style={{color: "#ff6600"}} >RAISED APPARELS</div>
              </div>
            </h3>
            <div className="card-content">
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
            <h3 className="card-titles">Advantages</h3>
            <div className="card-content">
              <ul className="advantages-list">
                {comparisonData.right.map((advantage, index) => (
                  <li key={index}>{advantage}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="categoriesWrapper">
        <div className="categoryGrid">
          {categories.map((category, index) => (
            <div key={index} className="categoryItem">
              <h2 className="categoryTitle">{category.title}</h2>
              <div className="categoryTextWrapper">
                <p className="categoryText">{category.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="cerification">
        <h2 className="sectionHeading">CERTIFICATIONS</h2>
        <div className="certificationsGrid">
          <div className="certificationLogo">
            <img src="/bci logo.png" className="certificationLogo-img" alt="BCI Certification" />
          </div>
          <div className="certificationLogo">
            <img src="/fsc logo.png" className="certificationLogo-img" alt="FSC Certification" />
          </div>
          <div className="certificationLogo">
            <img src="/sedex logo.png" className="certificationLogo-img" alt="Sedex Certification" />
          </div>
        </div>
      </div>

      {/* CLIENTS */}
      <div className="clients">
        <h2 className="sectionHeading">CLIENTS</h2>
        <div className="clientsImage">
          <img src="/logo bw.png" alt="Clients" className="desktop-img" />
          <img src="/mobile client.png" className="mobile-client" alt="Mobile Clients" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;