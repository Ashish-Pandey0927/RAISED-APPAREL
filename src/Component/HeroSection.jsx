import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const HeroSection = () => {
    const marqueeRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        gsap.to(marqueeRef.current, {
            x: "-50%",
            duration: 30,
            repeat: -1,
            ease: "linear",
        });
    }, []);

    // Array of brand logo images
    const brandLogos = [
        "/BG-icons/1.png",
        "/BG-icons/2.png",
        "/BG-icons/3.png",
        "/BG-icons/4.png",
        "/BG-icons/5.png",

    ];

    return (
        <div style={{ 
            position: "relative", 
            width: "100%", 
            height: "100dvh",
            overflow: "hidden" 
        }}>
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.4,
                }}
            >
                <source src="/heroVideo.mp4" type="video/mp4" />
            </video>

            {/* Overlay Content */}
            <div
                style={{
                    position: "relative",
                    left: isMobile ? 0 : 100,
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    textAlign: "center",
                    padding: isMobile ? "0 1rem" : "0 2rem",
                    color: "#fff",
                }}
            >
                {/* Stats Section */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile 
                            ? "repeat(1, 1fr)" 
                            : "repeat(auto-fit, minmax(120px, 1fr))",
                        gap: isMobile ? "20px" : "20px",
                        fontSize: isMobile ? ".5rem" : "1.5rem",
                        fontWeight: "400",
                        maxWidth: "500px",
                        marginBottom: isMobile ? "0rem" : "2rem",
                        textAlign: "left",
                        width: "100%",
                        position: isMobile ? "absolute" : "relative",
                        bottom: isMobile ? "10rem" : "auto",
                    }}
                >
                    {[
                        { value: "50M+", label: "Quantities Shipped" },
                        { value: "250+", label: "Suppliers" },
                        { value: "50+", label: "Buyers" },
                        { value: "100+", label: "In-house Design & Sampling" },
                        { value: "15K+", label: "Styles" },
                        { value: "1K+", label: "Trained Employees" },
                    ].map((item, index) => (
                        <div key={index}>
                            <span style={{ 
                                fontSize: isMobile ? "24px" : "48px", 
                                fontWeight: "400",
                                lineHeight: "16px",
                                letterSpacing: "0em",
                                textAlign: "left",
                            }}>
                                {item.value}
                            </span>
                            <br />
                            <span style={{
                                fontSize: isMobile ? "12px" : "16px",
                                marginTop: isMobile ? "5px" : "0px",
                                fontWeight: "normal",
                                lineHeight: "16px",
                                letterSpacing: "0em",
                                textAlign: "left",
                            }}>
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Heading Section */}
                <h1
                    style={{
                        fontSize: "clamp(2rem, 5vw, 5rem)",
                        fontWeight: "700",
                        lineHeight: "1.2",
                        maxWidth: isMobile ? "400px" : "800px",
                        margin: isMobile ? "0.5rem 0" : "1rem 0",
                        position: isMobile ? "absolute" : "relative",
                        bottom: isMobile ? "18rem" : "auto",
                    }}
                >
                    BRIDGING FASHION & BUSINESS
                </h1>
            </div>

            {/* Trusted Brands Section */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    backgroundColor: "#1A1A1A",
                    color: "#fff",
                    textAlign: "center",
                    padding: isMobile ? "0.1rem 0rem" : "1rem 0",
                }}
            >
                <h2 style={{ 
                    fontSize: isMobile ? "1rem" : "1.2rem", 
                    fontWeight: "600", 
                    marginBottom: "10px" 
                }}>
                    TRUSTED BY LEADING BRANDS
                </h2>
                
                {/* Marquee Wrapper */}
                <div
                    style={{
                        backgroundColor: "#363535",
                        overflow: "hidden",
                        width: "100%",
                        padding: "1rem 0",
                    }}
                >
                    <div
                        ref={marqueeRef}
                        style={{
                            display: "flex",
                            whiteSpace: "nowrap",
                            alignItems: "center",
                            width: "max-content",
                        }}
                    >
                        {/* Duplicating the brand logos for seamless scrolling */}
                        {[...Array(2)].map((_, index) => (
                            <div key={index} style={{ display: "flex", }}>
                                {brandLogos.map((logo, i) => (
                                    <img
                                    key={i}
                                    src={logo}
                                    alt={`Brand ${i + 1}`}
                                    style={{
                                        width: isMobile ? "500px" : "800px",  // Fixed width
                                        height: isMobile ? "2rem" : "5rem", // Fixed height
                                        objectFit: "cover",               // Ensures image aspect ratio is maintained
                                        margin: "0 0.5rem",
                                    }}
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
