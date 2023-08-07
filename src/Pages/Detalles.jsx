import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MyContext } from '../context/MyContext'

const Detalles = () => {

  const { dataFunkos } = useContext(MyContext)

  const { id } = useParams()

  const funkoDetalle = dataFunkos.find(item => item.id == id)
  console.log(funkoDetalle)


  return (
    <main className="m-2">
      <div className='d-flex flex-row'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={funkoDetalle.image} className="card-img-top" alt="Descripción de la imagen" />
          <div className="card-body">
            <h5 className="card-title">{funkoDetalle.nombre}</h5>
            <p className="card-text">{funkoDetalle.detalles}</p>
            
          </div>
        </div>
      </div>
    </main>
  )
}

export default Detalles
