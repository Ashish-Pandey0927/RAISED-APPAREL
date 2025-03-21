import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";

const BlogSection = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Blog.json');
        const data = await response.json();
        setBlogs(data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) return <div className="loading">Loading Blogs...</div>;

  return (
    <div style={{
      background: "linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 100%)",
      minHeight: "100vh",
      padding: isMobile ? "1.5rem 1rem" : "3rem 1.5rem",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        color: "white",
      }}>
        <motion.button
          onClick={() => navigate(-1)}
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
          <IoIosArrowBack style={{ color: "#ff6431", fontSize: isMobile ? "1.5rem" : "2rem" }} />
        </motion.button>

        <div style={{ display: "grid", gap: isMobile ? "1.5rem" : "2rem" }}>
          {blogs.map(blog => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              style={{
                background: "rgba(40, 40, 40, 0.8)",
                borderRadius: "24px",
                padding: isMobile ? "1.25rem" : "2rem",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                cursor: "pointer",
              }}
              onClick={() => navigate(`/blogs/${blog.id}`)}
            >
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
                gap: isMobile ? "1rem" : "2rem",
                alignItems: "center",
              }}>
                <img
                  src={blog.images[0]}
                  alt="Blog"
                  style={{
                    width: "100%",
                    height: isMobile ? "200px" : "250px",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h2 style={{
                    fontSize: isMobile ? "1.25rem" : "1.5rem",
                    fontWeight: 600,
                    marginBottom: "1rem",
                  }}>
                    {blog.title}
                  </h2>
                  <p style={{
                    lineHeight: 1.6,
                    marginBottom: isMobile ? "1.5rem" : "2rem",
                    fontSize: isMobile ? "0.9rem" : "1rem",
                  }}>
                    {blog.previewText}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;