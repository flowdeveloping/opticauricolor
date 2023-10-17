import React from 'react'
import ProductoPortada from '../components/productosPortada' 
import ProductoProductos from '../components/cardsProductos'
import ProductoCristales from '../components/cardscristales'

const Productos = () => {
  return (
    <>
    <ProductoPortada />
    <ProductoProductos/>
    <ProductoCristales/>
    </>
    
  )
}

export default Productos