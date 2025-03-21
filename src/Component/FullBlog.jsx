import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from 'prop-types';

const formatBoldText = (text) => {
  return text.split(/\*(.*?)\*/g).map((part, index) => 
    index % 2 === 1 ? <strong key={index}>{part}</strong> : part
  );
};

const FullBlog = ({ blog, onBack, isMobile }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentImageIndex(prev => (prev + 1) % blog.images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentImageIndex(prev => (prev - 1 + blog.images.length) % blog.images.length);
  };

  return (
    <div style={{
      background: "linear-gradient(45deg, #1a1a1a 0%, #2d2d2d 100%)",
      color: "#fff",
      minHeight: "100vh",
      padding: isMobile ? "1.5rem 1rem" : "3rem 1.5rem",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
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
          }}
        >
          <IoIosArrowBack style={{ color: "#ff6431", fontSize: isMobile ? "1.5rem" : "2rem" }} />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: "rgba(40, 40, 40, 0.8)",
            padding: isMobile ? "1.25rem" : "2.5rem",
            borderRadius: "24px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h1 style={{
            fontSize: isMobile ? "1.75rem" : "2.5rem",
            fontWeight: 700,
            marginBottom: isMobile ? "1.5rem" : "2rem",
            lineHeight: 1.2,
          }}>
            {blog.title}
          </h1>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: isMobile ? "1.5rem" : "3rem",
          }}>
            <div style={{ position: "relative", overflow: "hidden", borderRadius: "16px" }}>
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={currentImageIndex}
                  src={blog.images[currentImageIndex]}
                  alt="Blog"
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 100 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: "100%",
                    height: isMobile ? "250px" : "400px",
                    objectFit: "cover",
                    borderRadius: "16px",
                  }}
                />
              </AnimatePresence>

              {blog.images.length > 1 && (
                <>
                  <motion.button
                    onClick={handlePrev}
                    whileHover={{ scale: 1.1 }}
                    style={{
                      position: "absolute",
                      left: "1rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "rgba(0, 0, 0, 0.5)",
                      borderRadius: "50%",
                      padding: "8px",
                    }}
                  >
                    <IoIosArrowBack style={{ color: "white", fontSize: "1.5rem" }} />
                  </motion.button>
                  <motion.button
                    onClick={handleNext}
                    whileHover={{ scale: 1.1 }}
                    style={{
                      position: "absolute",
                      right: "1rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "rgba(0, 0, 0, 0.5)",
                      borderRadius: "50%",
                      padding: "8px",
                    }}
                  >
                    <IoIosArrowForward style={{ color: "white", fontSize: "1.5rem" }} />
                  </motion.button>
                </>
              )}
            </div>

            <div style={{
              lineHeight: 1.7,
              fontSize: isMobile ? "1rem" : "1.1rem",
            }}>
              {blog.fullContent.split("\n").map((paragraph, index) => (
                <p key={index} style={{ marginBottom: "1.5rem" }}>
                  {formatBoldText(paragraph)}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

FullBlog.propTypes = {
  blog: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
  isMobile: PropTypes.bool
};

export default FullBlog;