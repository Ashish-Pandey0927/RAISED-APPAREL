import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/WhyChooseUs.css";

const WhyChooseUs = () => {
  const navigate = useNavigate();

  const features = [
    { 
      id: 1, // Match blog IDs from Blog.json
      title: "CUSTOMISATION", 
      image: "https://plus.unsplash.com/premium_photo-1674273913378-fe95949ae955?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    { 
      id: 2,
      title: "FAST DELIVERY", 
      image: "https://plus.unsplash.com/premium_photo-1682090258246-74c9293d4d75?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    { 
      id: 3,
      title: "FLEXIBLE MOQS", 
      image: "https://images.unsplash.com/photo-1625479142928-c2f2914318f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
  ];

  const handleKnowMore = (blogId) => {
    navigate(`/blogs/${blogId}`);
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