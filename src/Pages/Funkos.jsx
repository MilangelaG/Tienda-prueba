import React from 'react'
import { useNavigate } from 'react-router-dom'


const Funkos = ({ funkos }) => {

    const navigate = useNavigate()

    const onClick = () => {
        navigate(`detalles/${funkos.id}`)
    }

    /* const carrito = () => {
        navigate
    } */

    return (
        <main className="m-2">
            <div className='d-flex flex-row'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={funkos.image} className="card-img-top" alt="Descripción de la imagen" />
                    <div className="card-body">
                        <h5 className="card-title">{funkos.nombre}</h5>
                        <p className="card-text">{funkos.detalles}</p>
                        <div>
                            <a className="btn btn-primary" onClick={onClick}>Ver Detalles</a>
                            <a className="btn btn-primary" /* onClick={carrito} */>Añadir al Carrito</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Funkos
