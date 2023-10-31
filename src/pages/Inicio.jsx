import React from 'react';
import Carousel from '../components/Inicio/carousel';
import Cards from '../components/Inicio/cards';   
import CardPublicidad from '../components/Inicio/cardPublicidad' 

const Inicio = () => {
  return (
    <div>
        <Carousel/>
        <Cards/>
        <CardPublicidad/>
    </div>
  )
}

export default Inicio