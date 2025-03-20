import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
// import { motion } from "framer-motion";

const FullBlog = ({ blog, onBack, isMobile }) => {
  return (
    <div style={{ 
      background: "linear-gradient(45deg, #1a1a1a 0%, #2d2d2d 100%)", 
      color: "#fff",
      minHeight: "100vh",
      padding: isMobile ? "1.5rem 1rem" : "3rem 1.5rem"
    }}>
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto",
        position: "relative"
      }}>
        <motion.button 
          onClick={onBack}
          whileHover={{ scale: 1.05 }}
          style={{ 
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            padding: isMobile ? "8px" : "12px",
            border: "none",
            cursor: "pointer",
            marginBottom: isMobile ? "1.5rem" : "2rem",
            display: "flex",
            alignItems: "center"
          }}
        >
          <IoIosArrowBack style={{ 
            color: "#ff6431", 
            fontSize: isMobile ? "1.5rem" : "2rem" 
          }} />
        </motion.button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            background: "rgba(40, 40, 40, 0.8)",
            padding: isMobile ? "1.25rem" : "2.5rem",
            borderRadius: "24px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
          }}
        >
          <h1 style={{ 
            fontSize: isMobile ? "1.75rem" : "2.5rem", 
            fontWeight: 700,
            marginBottom: isMobile ? "1.5rem" : "2rem",
            lineHeight: 1.2
          }}>
            {blog.title}
          </h1>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "1.5rem" : "3rem",
            alignItems: "start"
          }}>
            <div style={{ 
              lineHeight: 1.7,
              fontSize: isMobile ? "1rem" : "1.1rem",
              letterSpacing: "0.2px"
            }}>
              {blog.fullContent.split('\n').map((paragraph, index) => (
                <p key={index} style={{ marginBottom: "1.5rem" }}>
                  {paragraph}
                </p>
              ))}
            </div>
            <img 
              src={blog.image} 
              alt="Blog" 
              style={{ 
                width: "100%",
                height: isMobile ? "250px" : "400px",
                borderRadius: "16px",
                objectFit: "cover",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)"
              }} 
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogs, setBlogs] = useState([]); // Add setter function

  useEffect(() => {
    // Add data fetching
    fetch("/Blog.json")
      .then(response => response.json())
      .then(data => setBlogs(data.blogs))
      .catch(error => console.error("Error fetching blogs:", error));

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (selectedBlog) {
    return <FullBlog blog={selectedBlog} onBack={() => setSelectedBlog(null)} isMobile={isMobile} />;
  }

  return (
    <div style={{ 
      background: "linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 100%)",
      minHeight: "100vh",
      padding: isMobile ? "1.5rem 1rem" : "3rem 1.5rem"
    }}>
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto",
        position: "relative",
        color: 'white'
      }}>
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
            alignItems: "center"
          }}
        >
          <IoIosArrowBack style={{ 
            color: "#ff6431", 
            fontSize: isMobile ? "1.5rem" : "2rem" 
          }} />
        </motion.button>

        <div style={{ 
          display: "grid",
          gap: isMobile ? "1.5rem" : "2rem"
        }}>
          <AnimatePresence>
            {blogs.map((blog) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.02 }}
                style={{ 
                  background: "rgba(40, 40, 40, 0.8)",
                  borderRadius: "24px",
                  padding: isMobile ? "1.25rem" : "2rem",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  cursor: "pointer",
                  overflow: "hidden"
                }}
                onClick={() => setSelectedBlog(blog)}
              >
                <div style={{ 
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
                  gap: isMobile ? "1rem" : "2rem",
                  alignItems: "center"
                }}>
                  <img 
                    src={blog.image} 
                    alt="Blog" 
                    style={{ 
                      width: "100%",
                      height: isMobile ? "200px" : "250px",
                      borderRadius: "12px",
                      objectFit: "cover"
                    }} 
                  />
                  <div>
                    <h2 style={{ 
                      fontSize: isMobile ? "1.25rem" : "1.5rem",
                      fontWeight: 600,
                      marginBottom: "1rem"
                    }}>
                      {blog.title}
                    </h2>
                    <p style={{ 
                      lineHeight: 1.6,
                      marginBottom: isMobile ? "1.5rem" : "2rem",
                      fontSize: isMobile ? "0.9rem" : "1rem"
                    }}>
                      {blog.fullContent.substring(0, isMobile ? 150 : 200)}...
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      style={{ 
                        background: "#ff6431",
                        padding: isMobile ? "10px 20px" : "12px 24px",
                        fontSize: isMobile ? "0.9rem" : "1rem",
                        borderRadius: "8px"
                      }}
                    >
                      Read More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;