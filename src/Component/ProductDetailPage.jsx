import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const isMobile = () => window.innerWidth <= 768;

const products = [
  { id: 1, name: "Stylish Shirt", image: "https://image.hm.com/assets/hm/13/b6/13b6efbf6699358b385c18bfa2dfa7e41d43a193.jpg?imwidth=1536", price: "$29.99", description: "A premium quality stylish shirt made from 100% cotton. Perfect for any occasion." },
  { id: 2, name: "Casual T-Shirt", image: "https://image.hm.com/assets/hm/95/b2/95b26c6ec290ad5eaf70e60d68865f85d88783b3.jpg?imwidth=1536", price: "$19.99", description: "A soft and comfortable casual T-shirt. Ideal for everyday wear." },
  {  id: 3,
    name: "Stylish Shirt",
    image: "https://image.hm.com/assets/hm/f6/e0/f6e0382c7715167394499d34c4e27542e00aa112.jpg?imwidth=1536",
    price: "$29.99", description: "A soft and comfortable casual T-shirt. Ideal for everyday wear." },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2 style={{ color: "white", textAlign: "center", marginTop: "2rem" }}>Product not found</h2>;

  return (
    <div style={{ 
      backgroundColor: "#1a1a1a", 
      color: "white", 
      padding: "2rem", 
      display: "flex", 
      flexDirection: isMobile() ? "column" : "row", 
      justifyContent: "center", 
      alignItems: "center", 
      minHeight: "100vh",
      textAlign: isMobile() ? "center" : "left"
    }}>
      <button 
        onClick={() => navigate(-1)} 
        style={{ 
          position: "absolute", 
          top: isMobile() ? "20px" : "130px", 
          left: "20px", 
          background: "gray", 
          color: "white", 
          border: "none", 
          padding: "10px 20px", 
          cursor: "pointer", 
          borderRadius: "5px" 
        }}>
        ← Back
      </button>

      <div style={{ 
        display: "flex", 
        flexDirection: isMobile() ? "column" : "row", 
        gap: "2rem", 
        maxWidth: "800px", 
        alignItems: "center" 
      }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ 
            width: isMobile() ? "90%" : "300px", 
            borderRadius: "10px" 
          }} 
        />
        
        <div style={{ maxWidth: "400px" }}>
          <h2 style={{ marginBottom: "1rem" }}>{product.name}</h2>
          <p style={{ marginBottom: "1rem" }}>{product.description}</p>
          <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "1rem" }}>{product.price}</p>
          <button 
            style={{ 
              background: "green", 
              color: "white", 
              border: "none", 
              padding: "10px 20px", 
              cursor: "pointer", 
              borderRadius: "5px", 
              width: isMobile() ? "100%" : "auto"
            }}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
