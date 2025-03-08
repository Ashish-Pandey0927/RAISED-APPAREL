import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const products = [
  {
    id: 9,
    name: "Stylish Shirt",
    image: "/FOOTER KIDSWEAR-20250308T172635Z-001/FOOTER KIDSWEAR/AB2339.jpg",
    price: "$29.99",
  },
  {
    id: 10,
    name: "Casual T-Shirt",
    image: "/FOOTER KIDSWEAR-20250308T172635Z-001/FOOTER KIDSWEAR/AD9460.jpg",
    price: "$19.99",
  },
  {
    id: 11,
    name: "Casual T-Shirt",
    image: "/FOOTER KIDSWEAR-20250308T172635Z-001/FOOTER KIDSWEAR/AL5277s.jpg",
    price: "$19.99",
  },
  {
    id: 12,
    name: "Casual T-Shirt",
    image: "/FOOTER KIDSWEAR-20250308T172635Z-001/FOOTER KIDSWEAR/AP0319.jpg",
    price: "$19.99",
  },
  {
    id: 13,
    name: "Casual T-Shirt",
    image: "/FOOTER KIDSWEAR-20250308T172635Z-001/FOOTER KIDSWEAR/AR9556s.jpg",
    price: "$19.99",
  },
  
  // Add more products here
];

const KidsWear = () => {
  // const navigate = useNavigate();
  const navigate = useNavigate();
      const [isMobile, setIsMobile] = useState(false);
    
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

  return (
    
    <div style={{ 
               backgroundColor: "#1A1A1A", 
               color: "white", 
               padding: isMobile ? "1rem" : "2rem",
               minHeight: "100vh",
               position: "relative"
             }}>
               {/* Header Section */}
               <div style={{
                 display: "flex",
                 justifyContent: "space-between",
                 alignItems: "center",
                 marginBottom: isMobile ? "1rem" : "2rem"
               }}>
                 <button
                   onClick={() => navigate(-1)}
                   style={{
                     background: "none",
                     border: "none",
                     color: "white",
                     cursor: "pointer",
                     display: "flex",
                     alignItems: "center",
                     gap: "0.5rem",
                     flex: isMobile ? 1 : "auto"
                   }}
                 >
                   <IoIosArrowBack style={{ fontSize: isMobile ? "1.5rem" : "2rem" }} />
                   {!isMobile && <span>Back</span>}
                 </button>
         
                 <h2 style={{ 
                   fontSize: isMobile ? "24px" : "36px", 
                   fontWeight: "600",
                   flex: 2,
                   textAlign: "center"
                 }}>
                   Kidswear Collection
                 </h2>
                 
                 {/* Spacer for alignment */}
                 <div style={{ flex: isMobile ? 1 : "auto" }}></div>
               </div>
         
               {/* Main Content */}
               <div style={{
                 display: "flex",
                 justifyContent: "space-between",
                 alignItems: "center",
                 gap: isMobile ? "0.5rem" : "2rem"
               }}>
                 {/* Navigation Buttons */}
                 {!isMobile && (
                   <>
                     <button
                       onClick={() => navigate('/streetwear')}
                       style={{
                         background: "none",
                         border: "none",
                         color: "white",
                         cursor: "pointer",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center",
                         gap: "1rem",
                         padding: "1rem",
                         transition: "all 0.3s ease",
                         height: "150px",
                         justifyContent: "center"
                       }}
                       onMouseEnter={(e) => e.currentTarget.style.color = "#FF652F"}
                       onMouseLeave={(e) => e.currentTarget.style.color = "white"}
                     >
                       <IoIosArrowBack style={{ fontSize: "2rem" }} />
                     </button>
                   </>
                 )}
         
                 {/* Product Grid */}
                 <div style={{ 
                   flex: 1,
                   display: "grid", 
                   gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(250px, 1fr))", 
                   gap: isMobile ? "0.5rem" : "1.5rem"
                 }}>
                   {products.map((product) => (
                     <div 
                       key={product.id} 
                       style={{ 
                         backgroundColor: "#222", 
                         padding: "1rem", 
                         borderRadius: "1rem", 
                         cursor: "pointer",
                         transition: "transform 0.3s ease",
                       }}
                       onClick={() => navigate(`/product/${product.id}`)}
                     >
                       <img 
                         src={product.image} 
                         alt={product.name} 
                         style={{ 
                           width: "100%", 
                           borderRadius: "0.5rem",
                           aspectRatio: "1/1",
                           objectFit: "cover"
                         }} 
                       />
                       <h3 style={{ 
                         marginTop: "1rem", 
                         fontSize: isMobile ? "14px" : "16px"
                       }}>
                         {product.name}
                       </h3>
                       <p style={{ fontSize: isMobile ? "12px" : "14px" }}>{product.price}</p>
                     </div>
                   ))}
                 </div>
         
                 {/* Right Navigation Button */}
                 {!isMobile && (
                   <button
                     onClick={() => navigate('/menswear')}
                     style={{
                       background: "none",
                       border: "none",
                       color: "white",
                       cursor: "pointer",
                       display: "flex",
                       flexDirection: "column",
                       alignItems: "center",
                       gap: "1rem",
                       padding: "1rem",
                       transition: "all 0.3s ease",
                       height: "150px",
                       justifyContent: "center"
                     }}
                     onMouseEnter={(e) => e.currentTarget.style.color = "#FF652F"}
                     onMouseLeave={(e) => e.currentTarget.style.color = "white"}
                   >
                     <IoIosArrowForward style={{ fontSize: "2rem" }} />
                   </button>
                 )}
               </div>
         
               {/* Mobile Navigation */}
               {isMobile && (
                 <div style={{
                   display: "flex",
                   justifyContent: "center",
                   gap: "2rem",
                   marginTop: "2rem"
                 }}>
                   <button
                     onClick={() => navigate('/womenswear')}
                     style={{
                       background: "none",
                       border: "none",
                       color: "white",
                       cursor: "pointer",
                       display: "flex",
                       alignItems: "center",
                       gap: "0.5rem"
                     }}
                   >
                     <IoIosArrowBack style={{ fontSize: "1.5rem" }} />
                     Previous
                   </button>
         
                   <button
                     onClick={() => navigate('/kidswear')}
                     style={{
                       background: "none",
                       border: "none",
                       color: "white",
                       cursor: "pointer",
                       display: "flex",
                       alignItems: "center",
                       gap: "0.5rem"
                     }}
                   >
                     Next
                     <IoIosArrowForward style={{ fontSize: "1.5rem" }} />
                   </button>
                 </div>
               )}
             </div>
  );
};

export default KidsWear;
