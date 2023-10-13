import React from 'react';
import Carousel from '../components/carousel';
import Cards from '../components/cards';   
import CardPublicidad from '../components/cardPublicidad' 

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