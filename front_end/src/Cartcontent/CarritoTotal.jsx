import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'



const CarritoTotal = () => {

    const {cart} = useContext(MyContext)

    const total = cart.reduce((acc, el)=> acc + el.precio * el.quanty, 0);

  return (
    <div>
      <h1>Total a pagar: ${total}</h1>
    </div>
  )
}

export default CarritoTotal
