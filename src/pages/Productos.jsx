import React from 'react'
import ProductoPortada from '../components/productos/productosPortada' 
import ProductoProductos from '../components/productos/cardsProductos'
import ProductoCristales from '../components/productos/cardscristales'

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