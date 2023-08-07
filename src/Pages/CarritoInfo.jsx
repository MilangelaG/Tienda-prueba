import React from 'react'
import { MyContext } from '../context/MyContext'
import { useParams } from 'react-router-dom'

const CarritoInfo = () => {

  const { cart } = useContext(MyContext)

  /* const addFunko = (id) => {
    setCart([...cart, funko])
  } */

  /* const navigate = useNavigate()
  const carrito = ()=> {
    navigate(`detalles/${funko.id}`)
  } */


  return cart.map((funkos) => {
    return (
      <div className='card m-3' style={{ maxWidth: "1500px" }} key={funkos.id}>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img src={funkos.image} className="img-fluid rounded-start" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className='card-title'><strong>{funkos.nombre}</strong></h1>
              <h2 className='card-text'>$ {funkos.precio}</h2>
            </div>
          </div>
        </div>
      </div>
    )
  })
}

export default CarritoInfo
