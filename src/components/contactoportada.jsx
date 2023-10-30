import React from 'react';
import portadaContacto from '../assets/img/fotocontacto/portadacontacto.png';

const Productos = () => {
  const divStyle = {
    margin: '3rem',
  };

  const divStyleMobile = {
    margin: 0,
  };

  return (
    <div style={divStyle} className="productos-container">
      <img
        src={portadaContacto}
        alt="Portada de Productos"
        style={{ width: "100%", height: "auto" }}
      />
      <style>
        {`
          @media (max-width: 768px) {
            .productos-container {
              margin: ${divStyleMobile.margin};
            }
          }
        `}
      </style>
    </div>
  );
};

export default Productos;
