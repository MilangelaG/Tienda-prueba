import React, { useContext } from 'react'
import CarritoInfo from './CarritoInfo'
import CarritoTotal from './CarritoTotal'
import { MyContext } from '../context/MyContext'

const Carrito = () => {

  const { cart } = useContext(MyContext)



  return cart.length > 0 ? (
    <div className="d-flex flex-wrap">
      <div className="col-lg-6 col-md-6 p-4" style={{ backgroundColor: "#f8f9fa" }}>
        <CarritoInfo />
      </div>
      <div className="col-lg-6 col-md-6 d-flex align-items-stretch">
        <div className="card shadow p-4 m-4 w-100 h-50%">
          <h4>Resumen del Pago</h4>
          <hr />
          <CarritoTotal />
        </div>
      </div>
    </div>


  ) : (

    <div className='container'>
      <h2 className="text-center text-muted fw-bold">Tu carrito está vacío</h2>
    </div>


  )
}

export default Carrito
