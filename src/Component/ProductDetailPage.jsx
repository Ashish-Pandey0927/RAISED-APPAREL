import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "motion/react";

const isMobile = () => window.innerWidth <= 768;

const ProductDetails = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
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
        const categoryLower = category.toLowerCase();

        if (!data[categoryLower]) {
          setError(`Category "${category}" not found`);
          setLoading(false);
          return;
        }

        const categoryProducts = data[categoryLower];
        setProducts(categoryProducts);

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
  }, [category, id]);

  if (loading) return <h2 style={{ color: "white", textAlign: "center", marginTop: "2rem" }}>Loading...</h2>;
  if (error) return <h2 style={{ color: "white", textAlign: "center", marginTop: "2rem" }}>{error}</h2>;
  if (!product) return <h2 style={{ color: "white", textAlign: "center", marginTop: "2rem" }}>Product not found</h2>;

  const similarProducts = products.filter(p => p.category === product.category && p.id !== product.id);

  return (
    <div style={{ backgroundColor: "#1a1a1a", color: "white", padding: "2rem", minHeight: "100vh" }}>
      <motion.button
          onClick={() => window.history.back()}
          whileHover={{ scale: 1.05 }}
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            padding: isMobile ? "8px" : "12px",
            border: "none",
            cursor: "pointer",
            marginBottom: isMobile ? "1.5rem" : "2rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IoIosArrowBack
            style={{
              color: "#ff6431",
              fontSize: isMobile ? "1.5rem" : "2rem",
            }}
          />
        </motion.button>

      <div style={{ display: "flex", flexDirection: isMobile() ? "column" : "row", gap: "3rem", maxWidth: "1200px", margin: "0 auto", paddingTop: "4rem" }}>
        <div style={{ flex: 1 }}>
          <div style={{ width: "100%", borderRadius: "10px", overflow: "hidden", marginBottom: "1rem" }}>
            <img src={product.images[activeImage]} alt={product.name} style={{ width: "100%", height: "auto", objectFit: "contain", objectPosition: "center" }} />
          </div>
          <div style={{ display: "flex", gap: "1rem", overflowX: "auto", paddingBottom: "1rem" }}>
            {product.images.map((img, index) => (
              <img key={index} src={img} alt={`Thumbnail ${index + 1}`} style={{ width: "80px", height: "100px", objectFit: "cover", borderRadius: "5px", cursor: "pointer", border: activeImage === index ? "2px solid #fff" : "none" }} onClick={() => setActiveImage(index)} />
            ))}
          </div>
        </div>

        <div style={{ flex: 1, padding: isMobile() ? 0 : "0 2rem" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{product.name}</h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem", lineHeight: "1.6" }}>{product.description}</p>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ marginBottom: "1rem" }}>Product Details</h3>
            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
              {product.details.map((detail, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>• {detail}</li>
              ))}
            </ul>
          </div>

          <button style={{ background: "#ff6431", color: "white", border: "none", padding: "1rem 2rem", cursor: "pointer", borderRadius: "5px", width: isMobile() ? "100%" : "auto", fontSize: "1rem" }}>
            <a href="/contact" style={{ color: 'white' }}>Request Full Catalog</a>
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
                {/* <p>{similarProduct.price}</p> */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
