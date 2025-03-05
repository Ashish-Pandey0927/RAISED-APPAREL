import React from "react";
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
import MenswearCatalog from "./Component/MenswearCatalog"; 
import WomenswearCatalog from "./Component/WomenswearCatalog";
import Contact from "./Component/Contact";
import useLenis from "./Component/useLenis";
import ProductDetailPage from "./Component/ProductDetailPage";
import BlogSection from "./Component/BlogSection";
import AboutUs from "./Component/AboutUs";

const App = () => {
  useLenis();
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
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
