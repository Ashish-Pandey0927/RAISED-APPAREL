import React from 'react'
import Navbar from './Component/Navbar'
import HeroSection from './Component/HeroSection'
import AboutSection from './Component/AboutSection'
import WhyChooseUs from './Component/WhyChooseUs'
import ProductsSection from './Component/ProductsSection'
import HowWeWork from './Component/HowWeWork'
import WhyPerfectFit from './Component/WhyPerfectFit'
import CollaborateSection from './Component/CollaborateSection'
import Footer from './Component/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <WhyChooseUs />
    <ProductsSection />
    <HowWeWork />
    <WhyPerfectFit />
    <CollaborateSection />
    <Footer />
    </>
  )
}

export default App