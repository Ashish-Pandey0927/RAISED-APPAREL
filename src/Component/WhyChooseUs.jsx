import React from "react";
import "./WhyChooseUs.css"; // Import external CSS for better maintainability

const WhyChooseUs = () => {
  // Data for the cards
  const features = [
    { title: "CUSTOMISATION", image: "https://plus.unsplash.com/premium_photo-1674273913378-fe95949ae955?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "FAST DELIVERY", image: "https://plus.unsplash.com/premium_photo-1682090258246-74c9293d4d75?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "FLEXIBLE MOQS", image: "https://images.unsplash.com/photo-1625479142928-c2f2914318f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  return (
    <div className="why-choose-container">
      {/* Heading */}
      <h2 className="why-choose-heading">Why Choose Us?</h2>

      {/* Cards Container */}
      <div className="why-choose-grid">
        {features.map((item, index) => (
          <div key={index} className="why-choose-card">
            {/* Image */}
            <div className="image-container">
              <img src={item.image} alt={item.title} className="feature-image" />
            </div>

            {/* Title */}
            <h3 className="card-title">{item.title}</h3>

            {/* Button */}
            <button className="know-more-button">KNOW MORE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
