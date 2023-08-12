import React from 'react'
import { Link } from 'react-router-dom'

const CrearCuenta = () => {
    return (
        <div>
            <main className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title text-center">Crear Cuenta</h2>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="nombreUsuario">Nombre de Usuario</label>
                                        <input type="nombreUsuario" className="form-control" id="nombreUsuario" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="correo">Correo Electronico</label>
                                        <input type="correo" className="form-control" id="correo" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Contraseña</label>
                                        <input type="password" className="form-control" id="password" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="direccion">Dirección</label>
                                        <input type="direccion" className="form-control" id="direccion" required/> 
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block mt-1">Crear Cuenta</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CrearCuenta
