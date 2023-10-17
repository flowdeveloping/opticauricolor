import React from "react";
import ProductosPortada from '../assets/img/fotosProductosCards/productosPortada/portadaProducto.png'

const Productos = () => {
  return (
    <div>
      <img
        src={ProductosPortada}
        alt="Portada de Productos"
        style={{ width: "100%", height: "auto" }}
      />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Productos</h1>
    </div>
  );
};

export default Productos;
