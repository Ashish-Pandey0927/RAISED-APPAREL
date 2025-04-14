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
        "/LOGO/1.png",
        "/LOGO/2.png",
        "/LOGO/3.png",
        "/LOGO/4.png",
        "/LOGO/5.png",
        "/LOGO/6.png",
        "/LOGO/7.png",
        "/LOGO/8.png",
        "/LOGO/9.png",
        "/LOGO/10.png",
        "/LOGO/11.png",
        "/LOGO/12.png",
        "/LOGO/13.png",
        "/LOGO/14.png",
        "/LOGO/15.png",
        "/LOGO/16.png",
        "/LOGO/17.png",
        "/LOGO/18.png",
        "/LOGO/19.png",
        "/LOGO/20.png",
        "/LOGO/21.png",
        "/LOGO/22.png",
        "/LOGO/23.png",
        "/LOGO/24.png",
        "/LOGO/25.png",
        

    ];

    return (
        <div style={{ 
            position: "relative", 
            width: "100%", 
            height: "100dvh",
            overflow: "hidden" 
        }}>
            {/* Background GIF */}
            <img
                src="/heroVideo.gif"
                alt="Background Animation"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "bottom",
                    opacity: 0.5,
                }}
            />

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
                        gap: isMobile ? "2rem" : "20px",
                        fontSize: isMobile ? ".5rem" : "1.5rem",
                        fontWeight: "lighter",
                        maxWidth: isMobile ? "30px" : "500px",
                        marginBottom: isMobile ? "1rem" : "2rem",
                        textAlign: "left",
                        width: "100%",
                        position: isMobile ? "absolute" : "relative",
                        bottom: isMobile ? "11rem" : "auto",
                        left: isMobile ? "1rem" : "0"
                    }}
                >
                    {[
                        { value: "10M+", label: "Quantities Shipped" },
                        { value: "250+", label: "Suppliers" },
                        { value: "50+", label: "Global Buyers" },
                        { value: "100+", label: "In-house Design & Sampling" },
                        { value: "50+", label: "Design experts" },
                        { value: "15K+", label: "Styles" },
                    ].map((item, index) => (
                        <div key={index}>
                            <span style={{ 
                                fontSize: isMobile ? "22px" : "48px", 
                                fontWeight: isMobile ? "lighter" : "400",
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
                                fontWeight: isMobile ? "lighter" : "400",
                                // maxWidth: isMobile ? "30px" : "auto",
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
                        fontSize: isMobile ? "45px" : "clamp(2rem, 5vw, 5rem)",
                        fontWeight: "900",
                        textTransform: "uppercase",
                        textAlign: isMobile ? "left" : "center",
                        lineHeight: isMobile ? "39px" : "1.2",
                        maxWidth: isMobile ? "270px" : "800px",
                        margin: isMobile ? "0rem 0" : "1rem 0",
                        position: isMobile ? "absolute" : "relative",
                        bottom: isMobile ? "20rem" : "auto",
                        right: isMobile ? "0rem" : "0",
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
                    // fontSize: isMobile ? "1px" : "2rem", 
                    padding: isMobile ? "0.5rem 0rem" : "1rem 0",
                }}
            >
                <h3 style={{ 
                    fontSize: isMobile ? "20px" : "2rem", 
                    fontWeight: "400", 
                    marginBottom: "10px",
                    // padding: isMobile ? "0.5rem" : "" 
                    // margin: isMobile ? "15px" : "none"
                }}>
                    TRUSTED BY LEADING BRANDS
                </h3>
                
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
                                        width: isMobile ? "80px" : "100px",  // Fixed width
                                        height: isMobile ? "50px" : "50px", // Fixed height
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
