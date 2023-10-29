import React from "react";
import ProductosPortada from '../assets/img/fotosProductosCards/productosPortada/portadaProducto.png'

const Productos = () => {
  const titleStyle = {
    textAlign: "center",
    marginTop: "20px",
    color: "#0060A8",
  };

  const underlineStyle = {
    borderBottom: "3px solid #FFA51F",
    paddingBottom: "10px",
    display: "inline-block",
  };

  return (
    <div>
      <img
        src={ProductosPortada}
        alt="Portada de Productos"
        style={{ width: "100%", height: "auto" }}
      />
      <h1 style={titleStyle}>
        <span style={underlineStyle}>Productos</span>
      </h1>
    </div>
  );
};

export default Productos;

