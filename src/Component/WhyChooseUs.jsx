import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/WhyChooseUs.css";

const WhyChooseUs = () => {
  const navigate = useNavigate();

  const features = [
    { 
      id: 1,
      title: "CUSTOMISATION", 
      image: "/blog-img/blog 1 2.png" 
    },
    { 
      id: 2,
      title: "FAST DELIVERY", 
      image: "/blog-img/blog 2 1.jpeg" 
    },
    { 
      id: 3,
      title: "FLEXIBLE MOQS", 
      image: "/blog-img/blog 3 1.jpeg" 
    },
  ];

  const handleKnowMore = (id) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <div className="why-choose-container">
      <h2 className="why-choose-heading">WHY CHOOSE US?</h2>
      <div className="why-choose-grid">
        {features.map((item) => (
          <div key={item.id} className="why-choose-card">
            <div className="image-container">
              <img src={item.image} alt={item.title} className="feature-image" />
            </div>
            <h3 className="card-title">{item.title}</h3>
            <button 
              className="know-more-button"
              onClick={() => handleKnowMore(item.id)}
            >
              KNOW MORE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;