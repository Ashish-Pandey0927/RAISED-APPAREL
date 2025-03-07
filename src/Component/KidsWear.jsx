import React from "react";
import { useNavigate } from "react-router-dom";

const KidsWear = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "black", color: "white", padding: "2rem", textAlign: "center" }}>
      {/* Back Button */}
      <button onClick={() => navigate(-1)} style={{ background: "gray", color: "white", border: "none", padding: "10px 20px", cursor: "pointer", borderRadius: "5px", marginBottom: "20px" }}>
        ← Back
      </button>

      <h2 style={{ fontSize: "36px", fontWeight: "600", marginBottom: "2rem" }}>Menswear Catalog</h2>
      
      {/* Example Menswear Products */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
        <div style={{ backgroundColor: "#222", padding: "1rem", borderRadius: "1rem" }}>
          <img src="https://image.hm.com/assets/hm/28/b2/28b240edc65a6b0df83dd0c282809abdf220ad23.jpg?imwidth=396" alt="Shirt" style={{ width: "100%", borderRadius: "0.5rem" }} />
          <h3 style={{ marginTop: "1rem" }}>Stylish Shirt</h3>
        </div>
        <div style={{ backgroundColor: "#222", padding: "1rem", borderRadius: "1rem" }}>
          <img src="https://image.hm.com/assets/hm/28/b2/28b240edc65a6b0df83dd0c282809abdf220ad23.jpg?imwidth=396" alt="Shirt" style={{ width: "100%", borderRadius: "0.5rem" }} />
          <h3 style={{ marginTop: "1rem" }}>Stylish Shirt</h3>
        </div>
        <div style={{ backgroundColor: "#222", padding: "1rem", borderRadius: "1rem" }}>
          <img src="https://image.hm.com/assets/hm/28/b2/28b240edc65a6b0df83dd0c282809abdf220ad23.jpg?imwidth=396" alt="Shirt" style={{ width: "100%", borderRadius: "0.5rem" }} />
          <h3 style={{ marginTop: "1rem" }}>Stylish Shirt</h3>
        </div>
        <div style={{ backgroundColor: "#222", padding: "1rem", borderRadius: "1rem" }}>
          <img src="https://image.hm.com/assets/hm/28/b2/28b240edc65a6b0df83dd0c282809abdf220ad23.jpg?imwidth=396" alt="Shirt" style={{ width: "100%", borderRadius: "0.5rem" }} />
          <h3 style={{ marginTop: "1rem" }}>Stylish Shirt</h3>
        </div>
        <div style={{ backgroundColor: "#222", padding: "1rem", borderRadius: "1rem" }}>
          <img src="https://image.hm.com/assets/hm/28/b2/28b240edc65a6b0df83dd0c282809abdf220ad23.jpg?imwidth=396" alt="Shirt" style={{ width: "100%", borderRadius: "0.5rem" }} />
          <h3 style={{ marginTop: "1rem" }}>Stylish Shirt</h3>
        </div>
        <div style={{ backgroundColor: "#222", padding: "1rem", borderRadius: "1rem" }}>
          <img src="https://image.hm.com/assets/hm/28/b2/28b240edc65a6b0df83dd0c282809abdf220ad23.jpg?imwidth=396" alt="Shirt" style={{ width: "100%", borderRadius: "0.5rem" }} />
          <h3 style={{ marginTop: "1rem" }}>Stylish Shirt</h3>
        </div>
        <div style={{ backgroundColor: "#222", padding: "1rem", borderRadius: "1rem" }}>
          <img src="https://image.hm.com/assets/hm/28/b2/28b240edc65a6b0df83dd0c282809abdf220ad23.jpg?imwidth=396" alt="Shirt" style={{ width: "100%", borderRadius: "0.5rem" }} />
          <h3 style={{ marginTop: "1rem" }}>Stylish Shirt</h3>
        </div>
        <div style={{ backgroundColor: "#222", padding: "1rem", borderRadius: "1rem" }}>
          <img src="https://image.hm.com/assets/hm/28/b2/28b240edc65a6b0df83dd0c282809abdf220ad23.jpg?imwidth=396" alt="Shirt" style={{ width: "100%", borderRadius: "0.5rem" }} />
          <h3 style={{ marginTop: "1rem" }}>Stylish Shirt</h3>
        </div>
        <div style={{ backgroundColor: "#222", padding: "1rem", borderRadius: "1rem" }}>
          <img src="https://image.hm.com/assets/hm/28/b2/28b240edc65a6b0df83dd0c282809abdf220ad23.jpg?imwidth=396" alt="Shirt" style={{ width: "100%", borderRadius: "0.5rem" }} />
          <h3 style={{ marginTop: "1rem" }}>Stylish Shirt</h3>
        </div>
        <div style={{ backgroundColor: "#222", padding: "1rem", borderRadius: "1rem" }}>
          <img src="https://image.hm.com/assets/hm/28/b2/28b240edc65a6b0df83dd0c282809abdf220ad23.jpg?imwidth=396" alt="Shirt" style={{ width: "100%", borderRadius: "0.5rem" }} />
          <h3 style={{ marginTop: "1rem" }}>Stylish Shirt</h3>
        </div>
      </div>
    </div>
  );
};

export default KidsWear;
