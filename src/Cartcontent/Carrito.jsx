import React, { useContext } from 'react'
import CarritoInfo from './CarritoInfo'
import CarritoTotal from './CarritoTotal'
import { MyContext } from '../context/MyContext'

const Carrito = () => {

  const { cart } = useContext(MyContext)



  return cart.length > 0 ? (
    <div>
      <CarritoInfo />
      <CarritoTotal />
    </div>
  ) : (
    
      <h2 className="text-center text-muted fw-bold">Tu carrito está vacío</h2>
    

  )
}

export default Carrito
