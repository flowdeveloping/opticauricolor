import React from 'react';
import portadaContacto from '../../assets/img/fotocontacto/portadacontacto.png';
import '../../styles/Contacto.css'; // Importa el archivo CSS

const Productos = () => {
  return (
    <div className="productos-container">
      <img
        src={portadaContacto}
        alt="Portada de Productos"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default Productos;