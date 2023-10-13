import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import PortadaSlider1 from '../assets/img/sliderhome/PortadaSlider1.png'
import PortadaSlider2 from '../assets/img/sliderhome/PortadaSlider2.png'


const carousel = () => {
  return (
    <div  style={{ margin: '5rem 5rem' }}>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={PortadaSlider1}
              alt="First slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={PortadaSlider2}
              alt="Second slide"
            />
          
          </Carousel.Item>
          
        </Carousel>
      </div>
  )
}

export default carousel