import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const MenswearCatalog = () => {
  const { category } = useParams(); // Get category from URL (though not directly used for URL construction but for fetching)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json") // Ensure the correct path
      .then((response) => response.json())
      .then((data) => {
        if (data["menswear"]) {
          setProducts(data["menswear"]); // Load only the menswear category
        } else {
          setProducts([]);
        }
      })
      .catch((error) => console.error("Error loading products:", error));
  }, [category]);

  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      backgroundColor: "#1A1A1A",
      color: "white",
      padding: isMobile ? "1rem" : "2rem",
      minHeight: "100vh",
      position: "relative"
    }}>
      {/* Header Section */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: isMobile ? "1rem" : "2rem"
      }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flex: isMobile ? 1 : "auto"
          }}
        >
          <IoIosArrowBack style={{ fontSize: isMobile ? "1.5rem" : "2rem" }} />
          {!isMobile && <span>Back</span>}
        </button>

        <h2 style={{
          fontSize: isMobile ? "24px" : "36px",
          fontWeight: "400",
          flex: 2,
          textAlign: "center",
          textTransform: "uppercase"
        }}>
          {"menswear"} Collection
        </h2>

        {/* Spacer for alignment */}
        <div style={{ flex: isMobile ? 1 : "auto" }}></div>
      </div>

      {/* Main Content */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: isMobile ? "0.5rem" : "2rem"
      }}>
        {/* Navigation Buttons */}
        {!isMobile && (
          <>
            <button
              onClick={() => navigate('/kidswear')}
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem",
                transition: "all 0.3s ease",
                height: "150px",
                justifyContent: "center"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#FF652F"}
              onMouseLeave={(e) => e.currentTarget.style.color = "white"}
            >
              <IoIosArrowBack style={{ fontSize: "2rem" }} />
            </button>
          </>
        )}

        {/* Product Grid */}
        <div style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(250px, 1fr))",
          gap: isMobile ? "0.5rem" : "1.5rem"
        }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: "#222",
                padding: "1rem",
                borderRadius: "1rem",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onClick={() => navigate(`/menswear/product/${product.id}`)}  
              // {/* **Modified navigate here!** */}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                style={{
                  width: "100%",
                  borderRadius: "0.5rem",
                  aspectRatio: "1/1",
                  objectFit: "cover"
                }}
              />
              <h3 style={{
                marginTop: "1rem",
                fontSize: isMobile ? "14px" : "16px"
              }}>
                {product.name}
              </h3>
              {/* <p style={{ fontSize: isMobile ? "12px" : "14px" }}>{product.price}</p> */}
            </div>
          ))}
        </div>

        {/* Right Navigation Button */}
        {!isMobile && (
          <button
            onClick={() => navigate('/womenswear')}
            style={{
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              padding: "1rem",
              transition: "all 0.3s ease",
              height: "150px",
              justifyContent: "center"
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#FF652F"}
            onMouseLeave={(e) => e.currentTarget.style.color = "white"}
          >
            <IoIosArrowForward style={{ fontSize: "2rem" }} />
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMobile && (
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "2rem"
        }}>
          <button
            onClick={() => navigate('/kidswear')}
            style={{
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}
          >
            <IoIosArrowBack style={{ fontSize: "1.5rem" }} />
            Previous
          </button>

          <button
            onClick={() => navigate('/womenswear')}
            style={{
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}
          >
            Next
            <IoIosArrowForward style={{ fontSize: "1.5rem" }} />
          </button>
        </div>
      )}
    </div>
  );
};

export default MenswearCatalog;