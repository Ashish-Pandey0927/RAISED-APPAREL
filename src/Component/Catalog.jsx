import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Menswear",
    image: "https://s3-alpha-sig.figma.com/img/317f/118f/64b28d1adb97d5bb5b6ee7ffe3f1c32c?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iVsVmP6XzjoQAJ1Y~0KRugV1XaUGLngH223lpljNDaFBZr2sd2VbkadMt5wheLwfueLFTAKHlXLdePadovt2RwpLe2ZbSYcTBu28Um4P-xUPXWPAaeMtFHeOWll2KoNPznDDBBpWX97zfupzvG7TgNvo0H60VBKsp2RPaSMfy7nk~HeALrfaGsQlGVtaSZHLbANOSLZ4tdk962HBevtcafpdcQb6ak7gEQHT5ROvcABuXQ288anBJuzzNPef~M8zDmdz8jU4ePF2stbGlRiyBS1soL7b3h8oflVJZhuh-VmfSBG0zX~N1XD~XJNvoZh5gQtzr930Vcx4aZI3K4KFlg__",
    link: "/menswear",
  },
  {
    name: "Womenswear",
    image: "https://s3-alpha-sig.figma.com/img/8ea4/9994/1b3baec196f0a663a0d5007138198fb7?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nO9-mX7RYDVk9AF3v6T728Xv3k9X3sLkT62uizxYB20yp1XKT09waxjfynKVvt~n4LNoWK2E6LE9dyyjciA0RTU4a1~qlJPuCP23NyPP9ItgNir~pqNKcx3j8jRF9ucS4PrutufmkPBi0H3iGrVDVTKsiJ2qqDJDzwDYYxubUTuv6uEyAvc~NjrRI1ouk9b3TNNwuk2p9xov5ld7kHq0y2~E3Ci-j2TCrcCe1blfnOXpIL06Ziloh59tkdg7S0NRy8gCE4mMEfX607ba-P5qj0LNOBgSE0vLAq2fzyLnsl3tIY2HYJGLHOqsNN2qPY4oyOFbE8NvKuP0qWZGToPtGg__",
    link: "/womenswear",
  },
  {
    name: "Kidswear",
    image: "https://s3-alpha-sig.figma.com/img/12e2/dd59/08d4ce6c2664ced0e3aaa1b4904cf75d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=thd9NuUwpdrn-z7jy40YyooKeB9vhWS~NP5038PAnIXocqPQM~6EtAym9Mz72e-JSJbOcruKhNcMODqV6dUjLgtv3JwsgyM5IJ2qmmxVPd4D48TtaWc0THHP-ZDxU-Lp6wA1Lbo3JKCKfqfvE0k9yjcJx0Zxg053zMahcCVYcx6wnwEjDIkH8aFS9FlHSEazrNC1tDOXDqbcuMKXhHAw3Cfd4EAX5wVFHaLo3vPSS12PyQVEOQuq0RAfEs4kl7ntWOZ2SozTlPlaqnpt0sFe3P4dgj2PWw9a3MrttJ1q5ndlrZGXyg9Yvo6fQKQeFenvIFrchhargkJlDU6kmrxSkw__",
    link: "/kidswear",
  },
  {
    name: "Streetwear",
    image: "https://s3-alpha-sig.figma.com/img/f22b/d7e8/010d566f9e3b86bc4cab02a52a4ce616?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qPTcO8F1AyNgdgFH-Vw43cuBxcXLeBhxSE84vhYQU9INtVX37CUjZrfyk7jYfQAPM0aYdBCauCV5wBJrLRPBvoOFTOfEG4PmRSdAFYkz5kYaILPb9hXGKnKhqCipMo7iF33v5HmfMsTk3Lij2zSROILA2WRPq02eWIhoM4Dve76RBZgkJOUKGgwm8Lys-leD3qZJ-aw4z0lKSHk-7F8tsW9VpkhgeD13LT0QImVlBD14IYzUo0f09Y4FXjdy5Ra3PN-4qL~kfoSDSj39eCm9g-2NJNWRq4hKKy55d7AhNwdRzm-njQrgh9wP9R7gWM8anlPn076RGcxzKk5MuZH-Vg__",
    link: "/streetwear",
  },
];

const Catalog = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: isMobile ? "2rem" : "4rem 10rem",
        textAlign: "center",
        maxWidth: "100%",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", 
          gap: "1.5rem",
        }}
      >
        {products.map((product, index) => (
          <Link key={index} to={product.link} style={{ textDecoration: "none", color: "inherit" }}>
            <div
              style={{
                borderRadius: "1rem",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                backgroundColor: "#222",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "0.5rem",
                }}
              />
              <h3
                style={{
                  fontSize: isMobile ? "20px" : "24px",
                  fontWeight: "700",
                  marginTop: "1rem",
                }}
              >
                {product.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
