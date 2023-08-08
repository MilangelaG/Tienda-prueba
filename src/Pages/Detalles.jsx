import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MyContext } from '../context/MyContext'

const Detalles = () => {


  const { dataFunkos, cart, setCart } = useContext(MyContext)

  const { id } = useParams()  

  const funkoDetalle = dataFunkos.find(item => item.id == id)

  const addFunko = (id) => {
    setCart([...cart, funkoDetalle])    
}
  
  return (
    <main className="m-2" key={funkoDetalle.id}>
      <div className='d-flex flex-row'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={funkoDetalle.image} className="card-img-top" alt={funkoDetalle.nombre} />
          <div className="card-body">
            <h5 className="card-title">{funkoDetalle.nombre}</h5>
            <p className="card-text">{funkoDetalle.detalles}</p>
            <button className="btn btn-primary" onClick={()=>addFunko(funkoDetalle)}>Añadir al carrito</button>

          </div>
        </div>
      </div>
    </main>
  )
}

export default Detalles
