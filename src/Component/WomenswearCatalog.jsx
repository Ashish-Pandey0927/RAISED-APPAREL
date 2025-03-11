import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const products = [
  {
    id: 3,
    name: "Stylish Shirt",
    image: "https://image.hm.com/assets/hm/f6/e0/f6e0382c7715167394499d34c4e27542e00aa112.jpg?imwidth=1536",
    price: "$29.99",
  },
  {
    id: 3,
    name: "Casual T-Shirt",
    image: "https://image.hm.com/assets/hm/f6/e0/f6e0382c7715167394499d34c4e27542e00aa112.jpg?imwidth=1536",
    price: "$19.99",
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    image: "https://image.hm.com/assets/hm/f6/e0/f6e0382c7715167394499d34c4e27542e00aa112.jpg?imwidth=1536",
    price: "$19.99",
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    image: "https://image.hm.com/assets/hm/95/b2/95b26c6ec290ad5eaf70e60d68865f85d88783b3.jpg?imwidth=1536",
    price: "$19.99",
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    image: "https://image.hm.com/assets/hm/95/b2/95b26c6ec290ad5eaf70e60d68865f85d88783b3.jpg?imwidth=1536",
    price: "$19.99",
  },
  
  // Add more products here
];

const WomenswearCatalog = () => {
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
               fontWeight: "400",
               flex: 2,
               textAlign: "center",
               textTransform: "uppercase"
             }}>
               Womenswear Collection
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
                 onClick={() => navigate('/menswear')}
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
                 onClick={() => navigate('/streetwear')}
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

export default WomenswearCatalog;
