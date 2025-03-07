import React from "react";

const blogs = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Aliquam non ex est. Nulla maximus nisi sed nisi vulputate, cursus porta leo imperdiet. Integer consectetur id felis in molestie...",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Aliquam non ex est. Nulla maximus nisi sed nisi vulputate, cursus porta leo imperdiet. Integer consectetur id felis in molestie...",
    image: "https://via.placeholder.com/300",
  },
];

// Function to check if the screen width is mobile
const isMobile = () => window.innerWidth <= 768;

const BlogSection = () => {
  return (
    <div style={{ background: "#1A1A1A", color: "white", padding: "2rem" }}>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          style={{
            display: "flex",
            flexDirection: isMobile() ? "column" : "row",
            alignItems: "center",
            background: "#222",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          {/* Left Side - Text */}
          <div style={{ flex: 1, padding: "20px", textAlign: "left" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{blog.title}</h2>
            <p style={{ marginTop: "10px", lineHeight: "1.5" }}>{blog.content}</p>
            <button
              style={{
                marginTop: "10px",
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
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
              src={blog.image}
              alt="Blog"
              style={{
                width: isMobile() ? "100%" : "300px",
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
