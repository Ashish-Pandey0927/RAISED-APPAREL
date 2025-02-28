import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-black text-white px-8 py-16" style={{padding: "8rem 12rem"}}>
      {/* Who We Are Section */}
      <div className="mb-12" style={{marginBottom: "3rem"}}>
        <h2 className="text-3xl font-extrabold uppercase mb-4" style={{marginBottom:"1rem"}}>WHO WE ARE?</h2>
        <p className="text-lg leading-relaxed">
          Raised Apparel is a design-to-delivery service provider specializing in high-quality apparel manufacturing.
          From the initial design concept to final product delivery, we create apparel that reflects your brand’s
          identity. Our end-to-end solutions bridge the gap between creative vision and precise manufacturing, ensuring
          that every detail is executed to perfection.
        </p>
      </div>

      {/* Our Vision Section */}
      <div>
        <h2 className="text-3xl font-extrabold uppercase mb-4" style={{marginBottom: "1rem"}} >OUR VISION</h2>
        <p className="text-lg leading-relaxed">
          The go-to apparel manufacturer for brands looking for a full-service partner that can handle design,
          production, and distribution with precision and speed.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
