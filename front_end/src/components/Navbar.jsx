import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import IconCounter from '../Cartcontent/IconCounter'
import { MyContext } from '../context/MyContext'

const Navbar = () => {
    const navigate = useNavigate();
    const { cart, user, loggedIn, setUser } = useContext(MyContext)

    const cerrarSesion = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("usuario")
        alert("Adios")
        setUser("")
        navigate("/")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Tienda
                </Link>
                { loggedIn() ?
                    <Link className="navbar-brand" to="/Pedidos">
                        Pedidos
                    </Link> : null
                }
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <div className="nav-link"> {user} </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="Carrito">
                                🛒
                            </Link>
                        </li>
                        <li>
                            {cart.length > 0 ? <IconCounter /> : null}
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >

                                Cuenta
                            </Link>
                            <ul className="dropdown-menu">
                                {loggedIn() ?
                                    <li>
                                        <Link className="dropdown-item" onClick={cerrarSesion}>
                                            Cerrar sesión                                    
                                        </Link>
                                        
                                    </li>
                                    :
                                    <li>
                                        <Link className="dropdown-item" to="Login">
                                            <i className="fa-solid fa-user"></i>
                                            Iniciar sesión
                                        </Link>
                                    </li>
                                }
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Buscar"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Buscar
                        </button>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
