import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Catalog.css";

const products = [
  {
    name: "MENSWEAR",
    image: "https://image.hm.com/assets/hm/2a/9b/2a9b011888799bb1207585b81a67f0f58f2ea61d.jpg?imwidth=1536",
    link: "/menswear",
  },
  {
    name: "WOMENSWEAR",
    image: "https://image.hm.com/assets/hm/6b/ce/6bce18066bdf5351a3b41a36ae7cecc2a2586931.jpg?imwidth=1536",
    link: "/womenswear",
  },
  {
    name: "KIDSWEAR",
    image: "/FOOTER KIDSWEAR-20250308T172635Z-001/FOOTER KIDSWEAR/AP0288.jpg",
    link: "/kidswear",
  },
  {
    name: "ATHLEISURE",
    image: "https://images.unsplash.com/photo-1594035795389-9363dd86b113?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/streetwear",
  },
];

const Catalog = () => {
  return (
    <div className="catalogContainer">
      <div className="catalogGrid">
        {products.map((product, index) => (
          <Link
            key={index}
            to={product.link}
            className="catalogLink"
          >
            <div className="catalogItem">
              <img
                src={product.image}
                alt={product.name}
                className="catalogImage"
              />
              <h3 className="catalogTitle">{product.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Catalog;