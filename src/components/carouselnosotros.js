import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Componente1Nosotros from './componente1Nosotros';
import Componente2Nosotros from './componente2Nosotros';

const CarouselNosotros = () => {
  return (
    <div style={{ margin: '3rem 0' }}>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <Componente1Nosotros />
        </Carousel.Item>
        <Carousel.Item>
          <Componente2Nosotros />
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
};

export default CarouselNosotros;
