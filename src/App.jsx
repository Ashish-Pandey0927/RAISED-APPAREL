import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import AboutSection from "./Component/AboutSection";
import WhyChooseUs from "./Component/WhyChooseUs";
import ProductsSection from "./Component/ProductsSection";
import HowWeWork from "./Component/HowWeWork";
import WhyPerfectFit from "./Component/WhyPerfectFit";
import CollaborateSection from "./Component/CollaborateSection";
import Footer from "./Component/Footer";
import MenswearCatalog from "./Catalog/MenswearCatalog";
import WomenswearCatalog from "./Catalog/WomenswearCatalog";
import Contact from "./Component/Contact";
import useLenis from "./Component/useLenis";
import ProductDetailPage from "./Component/ProductDetailPage";
import BlogSection from "./Component/BlogSection";
import AboutUs from "./Component/AboutUs";
import Catalog from "./Component/Catalog";
import KidsWear from "./Catalog/KidsWear";
import StreetWear from "./Catalog/StreetWear";
import SingleBlog from "./Component/SingleBlog";

const App = () => {
  useLenis();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <AboutSection />
            <WhyChooseUs />
            <ProductsSection />
            <HowWeWork />
            <WhyPerfectFit />
            <CollaborateSection />
          </>
        } />
        <Route path="/menswear" element={<MenswearCatalog />} />
        <Route path="/womenswear" element={<WomenswearCatalog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:category/product/:id" element={<ProductDetailPage />} /> {/* **Modified Route Here!** */}
        {/* <Route path="/blog" element={<BlogSection />} /> */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/kidswear" element={<KidsWear />} />
        <Route path="/streetwear" element={<StreetWear />} />
        <Route path="/blogs" element={<BlogSection />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
      </Routes>
      {!isMobile && <Footer />}
    </Router>
  );
};

export default App;