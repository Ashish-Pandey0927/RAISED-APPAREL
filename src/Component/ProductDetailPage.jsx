import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const isMobile = () => window.innerWidth <= 768;

const ProductDetails = () => {
  const { category, id } = useParams(); // <-- Extract category from useParams
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); // To store products of the same category
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchProductDetails = async () => {
      try {
        const response = await fetch("/products.json");
        if (!response.ok) {
          throw new Error("Failed to load products");
        }
        const data = await response.json();
        const categoryLower = category.toLowerCase(); // Get category and lowercase for data access

        if (!data[categoryLower]) { // Check if the category exists in your data
          setError(`Category "${category}" not found`);
          setLoading(false);
          return;
        }

        const categoryProducts = data[categoryLower]; // Get products for the specific category
        setProducts(categoryProducts); // Store category products for similar items

        const foundProduct = categoryProducts.find((p) => p.id === parseInt(id));

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError(`Product with id ${id} not found in ${category} category`);
        }

        setLoading(false);

      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProductDetails();

  }, [category, id]); // <-- Add 'category' to the dependency array (important!)


  if (loading) return <h2 style={{ color: "white", textAlign: "center", marginTop: "2rem" }}>Loading...</h2>;
  if (error) return <h2 style={{ color: "white", textAlign: "center", marginTop: "2rem" }}>{error}</h2>;
  if (!product) return <h2 style={{ color: "white", textAlign: "center", marginTop: "2rem" }}>Product not found</h2>;

  // Get similar products from the same category
  const similarProducts = products.filter(p =>
    p.category === product.category && p.id !== product.id
  );

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
      {similarProducts.length > 0 && (
        <div style={{ marginTop: "4rem", maxWidth: "1200px", margin: "4rem auto 0" }}>
          <h2 style={{ marginBottom: "2rem" }}>Similar Products</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile() ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: "1rem",
            overflowX: isMobile() ? "auto" : "visible"
          }}>
            {similarProducts.map((similarProduct) => ( // Changed product to similarProduct for clarity
              <div
                key={similarProduct.id}
                style={{
                  backgroundColor: "#222",
                  borderRadius: "10px",
                  padding: "1rem",
                  cursor: "pointer"
                }}
                onClick={() => navigate(`/${category}/product/${similarProduct.id}`)} // <-- Updated navigate for similar products!
              >
                <img
                  src={similarProduct.images[0]}
                  alt={similarProduct.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "5px"
                  }}
                />
                <h3 style={{ margin: "1rem 0 0.5rem" }}>{similarProduct.name}</h3>
                <p>{similarProduct.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;