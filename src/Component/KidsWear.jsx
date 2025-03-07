import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 3,
    name: "Stylish Shirt",
    image: "https://image.hm.com/assets/hm/f6/e0/f6e0382c7715167394499d34c4e27542e00aa112.jpg?imwidth=1536",
    price: "$29.99",
  },
  {
    id: 3,
    name: "Casual T-Shirt",
    image: "https://image.hm.com/assets/hm/f6/e0/f6e0382c7715167394499d34c4e27542e00aa112.jpg?imwidth=1536",
    price: "$19.99",
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    image: "https://image.hm.com/assets/hm/f6/e0/f6e0382c7715167394499d34c4e27542e00aa112.jpg?imwidth=1536",
    price: "$19.99",
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    image: "https://image.hm.com/assets/hm/95/b2/95b26c6ec290ad5eaf70e60d68865f85d88783b3.jpg?imwidth=1536",
    price: "$19.99",
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    image: "https://image.hm.com/assets/hm/95/b2/95b26c6ec290ad5eaf70e60d68865f85d88783b3.jpg?imwidth=1536",
    price: "$19.99",
  },
  
  // Add more products here
];

const KidsWear = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "1A1A1A", color: "white", padding: "2rem", textAlign: "center" }}>
      <button onClick={() => navigate(-1)} style={{ background: "gray", color: "white", border: "none", padding: "10px 20px", cursor: "pointer", borderRadius: "5px", marginBottom: "20px" }}>
        ← Back
      </button>

      <h2 style={{ fontSize: "36px", fontWeight: "600", marginBottom: "2rem" }}>KidsWear Catalog</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
        {products.map((product) => (
          <div key={product.id} style={{ backgroundColor: "#222", padding: "1rem", borderRadius: "1rem", cursor: "pointer" }}
            onClick={() => navigate(`/product/${product.id}`)}>
            <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "0.5rem" }} />
            <h3 style={{ marginTop: "1rem" }}>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidsWear;
