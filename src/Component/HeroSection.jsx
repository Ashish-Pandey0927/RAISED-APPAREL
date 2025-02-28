import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
      gsap.to(marqueeRef.current, {
        x: "-50%", // Move by half so that the duplicated content creates a seamless loop
        duration: 10,
        repeat: -1,
        ease: "linear",
      });
    }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      >
        <source src="/heroVideo.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div
        className="relative z-10 flex justify-between items-center h-full text-white px-6 text-center top-15 left-5"
        style={{ padding: "0rem 12rem" }}
      >
        <div
          className="mt-6 flex flex-cols grid grid-cols-3 gap-y-10 gap-x-20 text-lg font-semibold relative"
          style={{ marginTop: "0.75rem"}}
        >
          <div>
            <span className="text-5xl font-normal">50M+</span>
            <br />
            Quantities Shipped
          </div>
          <div>
            <span className="text-5xl font-normal">250+</span>
            <br />
            Suppliers
          </div>
          <div>
            <span className="text-5xl font-normal">50+</span>
            <br />
            Buyers
          </div>
          <div>
            <span className="text-5xl font-normal">100+</span>
            <br />
            In-house Design & Sampling
          </div>
          <div>
            <span className="text-5xl font-normal">15K+</span>
            <br />
            Styles
          </div>
          <div>
            <span className="text-5xl font-normal">1K+</span>
            <br />
            Trained Employees
          </div>
        </div>
        <h1 className="text-[85px] font-extrabold leading-[90px] tracking-wide">
          BRIDGING FASHION & BUSINESS
        </h1>
      </div>

      {/* Trusted Brands Section */}
      <div className="absolute bottom-0 w-full bg-black text-white text-center py-4" style={{ padding: "1rem 0rem" }}>
        <h2 className="text-xl font-semibold" style={{marginBottom:'15px'}}>TRUSTED BY LEADING BRANDS</h2>
        <div className="bg-[#d9d9d9] overflow-hidden w-full py-2" style={{padding: "0rem 0.5rem"}}>
          <div
            className="flex whitespace-nowrap items-center"
            ref={marqueeRef}
            style={{ display: "flex", width: "max-content" }}
          >
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex">
                {[...Array(10)].map((_, i) => (
                  <img
                    key={i}
                    src="/path-to-company-logo.png"
                    alt="Company Logo"
                    className="h-12 mx-4"
                    style={{ height: "3rem", margin: "0rem 1rem" }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
