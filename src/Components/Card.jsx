import React from "react";

const Card = ({ nombre, color }) => {
  return (
    <div style={{ border: `2px solid ${color}`, padding: "20px", marginTop: "20px" }}>
      <h2>Hola {nombre}</h2>
      <p>Sabemos que tu color favorito es: {color}</p>
      <div
        style={{
          backgroundColor: color,
          width: "100px",
          height: "100px",
          border: "1px solid #000",
          marginTop: "10px",
        }}
      ></div>
    </div>
  );
};

export default Card;