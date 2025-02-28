import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-black text-white px-8 py-16 md:px-20 lg:px-40 text-center" style={{ padding: "8rem 12rem" }}>
      {/* Heading */}
      <h2 className="text-[48px] font-normal leading-[105px] mb-10" style={{marginBottom: "2.5rem"}}>Why Choose Us?</h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center ">
        {[
          { title: "Customisation" },
          { title: "Fast Delivery" },
          { title: "Flexible MOQs" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl w-full max-w-xs mx-auto p-6 flex flex-col items-center"
            style={{ padding: "1.5rem", margin: "0px auto" }}
          >
            {/* Image Placeholder */}
            <div className="w-full h-40 bg-gray-700 flex items-center justify-center rounded-lg mb-4" style={{ marginBottom: "4rem" }}>
              <span className="text-red-400 italic">image</span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-4" style={{ marginBottom: "1rem"}}>{item.title}</h3>

            {/* Button */}
            <button className="bg-[#ff6431] text-white py-2 px-6 rounded-full font-semibold hover:bg-orange-600 transition" style={{ padding: "0.5rem 1.5rem" }}>
              KNOW MORE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
