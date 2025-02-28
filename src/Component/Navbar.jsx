import React from "react";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center bg-[#ff6431]"
      style={{ padding: "1.5rem 0rem" }}
    >
      <p className="text-2xl font-bold w-2 text-white relative leading-5 tracking-[0.4px] left-24">RAISED APPAREL</p>
      <div className="gap-15 flex justify-center text-white items-center font-thin relative right-40">
        <a href="#" className="p-3" >
          Home
        </a>
        <a href="#" className="p-3" >
          About
        </a>
        <a href="#" className="p-3" >
          Services
        </a>
        <a href="#" className="p-3" >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
