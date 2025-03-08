import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";

const blogs = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    fullContent: `Aliquam non ex est. Nulla maximus nisi sed nisi vulputate, cursus porta leo imperdiet. Integer consectetur id felis in molestie. Sed tristique augue vitae aliquam scelerisque. Vivamus aliquet purus at magna aliquam, eu consequat tellus consequat. Fusce vitae ligula sit amet enim consequat fermentum.
    
    Curabitur auctor metus nec libero pharetra, at ultrices nisi tincidunt. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sit amet aliquet lectus. Mauris interdum justo id purus convallis, sit amet fermentum quam convallis.`,
    image: "https://plus.unsplash.com/premium_photo-1678447713054-7fbb2f129351?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    fullContent: `Aliquam non ex est. Nulla maximus nisi sed nisi vulputate, cursus porta leo imperdiet. Integer consectetur id felis in molestie. Sed tristique augue vitae aliquam scelerisque. Vivamus aliquet purus at magna aliquam, eu consequat tellus consequat. Fusce vitae ligula sit amet enim consequat fermentum.
    
    Curabitur auctor metus nec libero pharetra, at ultrices nisi tincidunt. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sit amet aliquet lectus. Mauris interdum justo id purus convallis, sit amet fermentum quam convallis.`,
    image: "https://plus.unsplash.com/premium_photo-1678447713054-7fbb2f129351?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // Keep the same blog structure with added fullContent
];

const FullBlog = ({ blog, onBack, isMobile }) => {
  return (
    <div style={{ 
      background: "#1A1A1A", 
      color: "white", 
      padding: isMobile ? "2rem 1rem" : "2rem 15rem",
      minHeight: "100vh"
    }}>
      <button
        onClick={onBack}
        style={{
          fontSize: "4rem",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "2rem"
        }}
      >
        <IoIosArrowBack />
      </button>

      <div style={{
        background: "#222",
        padding: isMobile ? "1rem" : "2rem",
        borderRadius: "30px"
      }}>
        <h1 style={{ 
          fontSize: isMobile ? "1.5rem" : "2rem", 
          fontWeight: "bold",
          marginBottom: "2rem"
        }}>
          {blog.title}
        </h1>

        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "2rem",
          alignItems: "center"
        }}>
          <div style={{ lineHeight: 1.6 }}>
            {blog.fullContent.split('\n').map((paragraph, index) => (
              <p key={index} style={{ marginBottom: "1rem" }}>
                {paragraph}
              </p>
            ))}
          </div>
          <img
            src={blog.image}
            alt="Blog"
            style={{
              width: isMobile ? "100%" : "500px",
              height: "auto",
              borderRadius: "10px",
              flexShrink: 0
            }}
          />

          
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (selectedBlog) {
    return <FullBlog 
      blog={selectedBlog} 
      onBack={() => setSelectedBlog(null)}
      isMobile={isMobile}
    />;
  }

  return (
    <div style={{ 
      background: "#1A1A1A", 
      color: "white", 
      padding: isMobile ? "2rem 1rem" : "2rem 15rem",
      position: "relative"
    }}>
      <button
        onClick={() => window.history.back()}
        style={{
          // background: "#FF652F",
          fontSize: "4rem",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "2rem"
        }}
      >
        <IoIosArrowBack />
      </button>

      {blogs.map((blog) => (
        <div
          key={blog.id}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            background: "#222",
            padding: isMobile ? "1rem" : "2rem",
            borderRadius: "30px",
            marginBottom: "20px",
          }}
        >
          {/* Left Side - Text */}
          <div style={{ flex: 1, padding: "20px", textAlign: "left" }}>
            <h2 style={{ 
              fontSize: isMobile ? "1.2rem" : "1.5rem", 
              fontWeight: "bold" 
            }}>
              {blog.title}
            </h2>
            <p style={{ 
              marginTop: isMobile ? "30px" : "70px", 
              lineHeight: "1.5" 
            }}>
              {blog.content}
            </p>
            <button
              onClick={() => setSelectedBlog(blog)}
              style={{
                marginTop: isMobile ? "40px" : "80px",
                background: "#FF652F",
                color: "black",
                padding: "10px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Read More
            </button>
          </div>

          {/* Right Side - Image */}
          <div style={{ 
            flex: 1, 
            display: "flex", 
            justifyContent: "center",
            order: isMobile ? -1 : 0
          }}>
            <img
              src={blog.image}
              alt="Blog"
              style={{
                width: isMobile ? "100%" : "300px",
                maxWidth: isMobile ? "400px" : "none",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;