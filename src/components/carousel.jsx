import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import PortadaSlider1 from '../assets/img/sliderhome/PortadaSlider1.png'
import PortadaSlider2 from '../assets/img/sliderhome/PortadaSlider2.png'


const CarouselComponent = () => {
  return (
    <div style={{ margin: '3rem 0' }}>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={PortadaSlider1}
              alt="First slide"
              style={{ maxHeight: '500px', maxWidth: '100%', objectFit: 'cover' }}
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={PortadaSlider2}
              alt="Second slide"
              style={{ maxHeight: '500px', maxWidth: '100%', objectFit: 'cover' }}
            />
          
          </Carousel.Item>
          
        </Carousel>
      </div>
  )
}

export default CarouselComponent
