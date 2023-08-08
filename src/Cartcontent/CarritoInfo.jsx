import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

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
      <main className="m-2" key={funkos.id}>
        <div className="col-md-6 mx-auto">
          <div className="card shadow-sm h-100">
            <img src={funkos.image} className="card-img-top" alt={funkos.nombre} />
            <div className="card-body">
              <h5 className="card-title">{funkos.nombre}</h5>
              <p className="card-text">{funkos.detalles}</p>
              <h4 className="text-primary">${funkos.precio}</h4>
            </div>
          </div>
        </div>
      </main>




    );
  });

}

export default CarritoInfo
