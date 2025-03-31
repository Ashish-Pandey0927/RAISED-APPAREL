import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/WhyChooseUs.css";

const WhyChooseUs = () => {
  const navigate = useNavigate();

  const features = [
    { 
      id: 1,
      title: "DESIGN TO DELIVERY", 
      image: "/Illustrations/customisation.png",
      // description: ""
    },
    { 
      id: 2,
      title: "30 DAYS LEAD TIME", 
      image: "/Illustrations/fast delivery.png" ,
      // description: ""
    },
    { 
      id: 3,
      title: "100 PIECES MOQS", 
      image: "/Illustrations/moq.png",
      // description: "" 
    },
    { 
      id: 4,
      title: "SUSTAINABILITY AND TRACEABILITY", 
      image: "/Illustrations/sustainability.png",
      // description: "Eco-friendly fabrics" 
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
            {/* <p className="card-description">{item.description}</p> */}
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