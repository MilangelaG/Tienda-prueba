import React from 'react'

const Login = () => {
    return (
        <div>
            <main className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title text-center">Iniciar sesión</h2>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="email">Correo electrónico</label>
                                        <input type="email" className="form-control" id="email" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Contraseña</label>
                                        <input type="password" className="form-control" id="password" required/>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login
