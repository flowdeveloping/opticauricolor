import React from 'react'
import ImgPublicidad from '../../assets/img/publicidadhome/publicidadHome.png'



const cardPublicidad = () => {
    return (
      <div className="d-none d-md-block" style={{ height: '50vh' }}>
        <img
          src={ImgPublicidad}
          alt="Publicidad"
          style={{ display: 'block', margin: '5rem auto', maxWidth: '100%' }}
        />
      </div>
    );
  }
  
  export default cardPublicidad;
  
  

  
  