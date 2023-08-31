import React, { useContext } from 'react'
import CarritoInfo from './CarritoInfo'
import CarritoTotal from './CarritoTotal'
import { MyContext } from '../context/MyContext'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

const Carrito = () => {

  const { cart, mainUrl } = useContext(MyContext)
  const navigate = useNavigate()

  const pagar = async () => {
    let token = localStorage.getItem('token');
    if (token == null){
      alert("Primero inicia con tu cuenta")
      return;
    }
    const api = mainUrl + "/crear_pedido";
    var req = axios.create({
      headers: { Authorization: "Bearer " + token }
    })
    const response = await(req.post(api, cart));
    if (response.data.status == "exitoso") {
      alert("Pedido creado 😀");
      navigate("/Pedidos")
    }else{
      alert("Ops no hemos podido crear el pedido");
    }
  };


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
          <Link className="btn btn-success" onClick={pagar}>
              Pagar
          </Link>
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
