import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";
import "../CSS/FullBlog.css"; // Import the CSS file

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
    setCurrentImageIndex((prev) => (prev + 1) % blog.images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + blog.images.length) % blog.images.length);
  };

  return (
    <div className={`full-blog-container ${isMobile ? "mobile" : ""}`}>
      <div className="full-blog-content">
        <motion.button className="back-button" onClick={onBack} whileHover={{ scale: 1.05 }}>
          <IoIosArrowBack className="back-icon" />
        </motion.button>

        <motion.div className="blog-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="blog-title">{blog.title}</h1>

          <div className="blog-layout">
            <div className="image-container">
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
                  className="blog-image"
                />
              </AnimatePresence>

              {blog.images.length > 1 && (
                <>
                  <motion.button className="nav-button left" onClick={handlePrev} whileHover={{ scale: 1.1 }}>
                    <IoIosArrowBack className="nav-icon" />
                  </motion.button>
                  <motion.button className="nav-button right" onClick={handleNext} whileHover={{ scale: 1.1 }}>
                    <IoIosArrowForward className="nav-icon" />
                  </motion.button>
                </>
              )}
            </div>

            <div className="blog-text">
              {blog.fullContent.split("\n").map((paragraph, index) => (
                <p key={index}>{formatBoldText(paragraph)}</p>
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
  isMobile: PropTypes.bool,
};

export default FullBlog;
