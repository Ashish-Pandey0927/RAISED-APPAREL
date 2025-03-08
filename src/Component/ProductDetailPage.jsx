import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const isMobile = () => window.innerWidth <= 768;

const products = [
  { 
    id: 1, 
    name: "Stylish Shirt", 
    images: [
      "https://image.hm.com/assets/hm/13/b6/13b6efbf6699358b385c18bfa2dfa7e41d43a193.jpg?imwidth=1536",
      "https://image.hm.com/assets/hm/95/b2/95b26c6ec290ad5eaf70e60d68865f85d88783b3.jpg?imwidth=1536",
      "https://image.hm.com/assets/hm/f6/e0/f6e0382c7715167394499d34c4e27542e00aa112.jpg?imwidth=1536"
    ], 
    price: "$29.99", 
    description: "Premium quality shirt made from 100% cotton",
    sizes: ["S", "M", "L", "XL"],
    details: [
      "100% Cotton",
      "Regular fit",
      "Machine wash",
      "Imported"
    ]
  },
  { 
    id: 2, 
    name: "Stylish Shirt", 
    images: [
      "/FOOTER MENS-20250308T170421Z-001/FOOTER MENS/buda_jeans_co_blue_men_relaxed_fit_colorblocked_denim_shirt.jpg",
      "https://image.hm.com/assets/hm/95/b2/95b26c6ec290ad5eaf70e60d68865f85d88783b3.jpg?imwidth=1536",
      "https://image.hm.com/assets/hm/f6/e0/f6e0382c7715167394499d34c4e27542e00aa112.jpg?imwidth=1536"
    ], 
    price: "$19.99", 
    description: "Premium quality shirt made from 100% cotton",
    sizes: ["S", "M", "L", "XL"],
    details: [
      "100% Cotton",
      "Regular fit",
      "Machine wash",
      "Imported"
    ]
  },
  { 
    id: 3, 
    name: "Stylish Shirt", 
    images: [
      "https://image.hm.com/assets/hm/13/b6/13b6efbf6699358b385c18bfa2dfa7e41d43a193.jpg?imwidth=1536",
      "https://image.hm.com/assets/hm/95/b2/95b26c6ec290ad5eaf70e60d68865f85d88783b3.jpg?imwidth=1536",
      "https://image.hm.com/assets/hm/f6/e0/f6e0382c7715167394499d34c4e27542e00aa112.jpg?imwidth=1536"
    ], 
    price: "$29.99", 
    description: "Premium quality shirt made from 100% cotton",
    sizes: ["S", "M", "L", "XL"],
    details: [
      "100% Cotton",
      "Regular fit",
      "Machine wash",
      "Imported"
    ]
  },
  {
  id: 9,
    name: "Stylish Shirt",
    images: [
      "/FOOTER KIDSWEAR-20250308T172635Z-001/FOOTER KIDSWEAR/AB2339.jpg",
      "/FOOTER KIDSWEAR-20250308T172635Z-001/FOOTER KIDSWEAR/AD9460.jpg"
    ],
    price: "$29.99", 
    description: "Premium quality shirt made from 100% cotton",
    sizes: ["S", "M", "L", "XL"],
    details: [
      "100% Cotton",
      "Regular fit",
      "Machine wash",
      "Imported"
    ]
  },
  {
  id: 10,
    name: "Stylish Shirt",
    images: [
      "/FOOTER KIDSWEAR-20250308T172635Z-001/FOOTER KIDSWEAR/AD9460.jpg",
      "/FOOTER KIDSWEAR-20250308T172635Z-001/FOOTER KIDSWEAR/AB2339.jpg"
    ],
    price: "$29.99", 
    description: "Premium quality shirt made from 100% cotton",
    sizes: ["S", "M", "L", "XL"],
    details: [
      "100% Cotton",
      "Regular fit",
      "Machine wash",
      "Imported"
    ]
  },
  
  // Add other products...
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  if (!product) return <h2 style={{ color: "white", textAlign: "center", marginTop: "2rem" }}>Product not found</h2>;

  return (
    <div style={{ 
      backgroundColor: "#1a1a1a", 
      color: "white", 
      padding: "2rem", 
      minHeight: "100vh"
    }}>
      <button 
        onClick={() => navigate(-1)} 
        style={{ 
          position: "absolute", 
          top: "20px", 
          left: "20px", 
          fontSize: "2rem",
          color: "white", 
          border: "none", 
          padding: "10px", 
          cursor: "pointer", 
          background: "none"
        }}>
        <IoIosArrowBack />
      </button>

      {/* Main Content */}
      <div style={{ 
        display: "flex", 
        flexDirection: isMobile() ? "column" : "row", 
        gap: "3rem", 
        maxWidth: "1200px", 
        margin: "0 auto",
        paddingTop: "4rem"
      }}>
        {/* Image Carousel */}
        <div style={{ flex: 1 }}>
          <div style={{ 
            width: "100%", 
            borderRadius: "10px", 
            overflow: "hidden",
            marginBottom: "1rem"
          }}>
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              style={{ 
                width: "100%", 
                height: isMobile() ? "auto" : "500px", 
                objectFit: "cover" 
              }} 
            />
          </div>
          <div style={{ 
            display: "flex", 
            gap: "1rem", 
            overflowX: "auto",
            paddingBottom: "1rem"
          }}>
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "5px",
                  cursor: "pointer",
                  border: activeImage === index ? "2px solid #fff" : "none"
                }}
                onClick={() => setActiveImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div style={{ flex: 1, padding: isMobile() ? 0 : "0 2rem" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{product.name}</h1>
          <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>{product.price}</p>
          
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ marginBottom: "1rem" }}>Select Size</h3>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  style={{
                    padding: "0.5rem 1rem",
                    border: "1px solid #fff",
                    background: selectedSize === size ? "#fff" : "transparent",
                    color: selectedSize === size ? "#000" : "#fff",
                    cursor: "pointer",
                    borderRadius: "4px"
                  }}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ marginBottom: "1rem" }}>Product Details</h3>
            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
              {product.details.map((detail, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>• {detail}</li>
              ))}
            </ul>
          </div>

          <button
            style={{
              background: "#4CAF50",
              color: "white",
              border: "none",
              padding: "1rem 2rem",
              cursor: "pointer",
              borderRadius: "5px",
              width: isMobile() ? "100%" : "auto",
              fontSize: "1rem"
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Similar Products */}
      <div style={{ marginTop: "4rem", maxWidth: "1200px", margin: "4rem auto 0" }}>
        <h2 style={{ marginBottom: "2rem" }}>Similar Products</h2>
        <div style={{ 
          display: "grid",
          gridTemplateColumns: isMobile() ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: "1rem",
          overflowX: isMobile() ? "auto" : "visible"
        }}>
          {products.filter(p => p.id !== product.id).map((product) => (
            <div
              key={product.id}
              style={{ 
                backgroundColor: "#222", 
                borderRadius: "10px", 
                padding: "1rem",
                cursor: "pointer"
              }}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "5px"
                }}
              />
              <h3 style={{ margin: "1rem 0 0.5rem" }}>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;