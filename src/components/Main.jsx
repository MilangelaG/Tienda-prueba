import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <main className="container mt-4">
                <h1>Bienvenido a Mi Tienda</h1>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src="https://playlander.cl/wp-content/uploads/2022/03/dragon-ball-z-figura-pop-animation-vinyl-frieza-9-cm.jpg" className="card-img-top" alt="Producto 1" />
                            <div className="card-body">
                                <h5 className="card-title">Freezer</h5>
                                <p className="card-text">Funko pop de Dragon Ball Z</p>
                                <p className="card-text">Precio: $15000</p>
                                <Link to="Detalles" className="btn btn-primary">Detalles</Link>
                                <Link to="Carrito" className="btn btn-primary">Agregar al Carrito</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9pQvtbA9VYSS-Fn_63m4T6nXkI-YXjQ5sSA&usqp=CAU" className="card-img-top" alt="Producto 2" />
                            <div className="card-body">
                                <h5 className="card-title">Squirtle</h5>
                                <p className="card-text">Funko pop de Pokemon</p>
                                <p className="card-text">Precio: $15000</p>
                                <Link to="Detalles" className="btn btn-primary">Detalles</Link>
                                <Link to="Carrito" className="btn btn-primary">Agregar al Carrito</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Main
