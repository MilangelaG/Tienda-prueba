import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from "react";
import { MyContext } from '../context/MyContext'
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(MyContext)

  const [usuario, setUsuarioLocal] = useState({ email: "", password: "" });

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuarioLocal({ ...usuario, ...field });
  };
  
  const iniciarSesion = async () => {
    const { email, password } = usuario;
    if (!email || !password) return alert("Email y password obligatorias");
    const api = "http://localhost:3001/login";
    try {
      const response = await axios.post(api, {email: email, password: password})
      let dataUser = await response.data;
      if (dataUser) {
        alert("Usuario identificado con éxito 😀");
        localStorage.setItem("token", dataUser.token);
        setUser(email);
      }else{
        alert("Ops no hemos podido identificarte");
      }
    }
    catch (error) {
        console.error(error);
        alert("Ops no hemos podido identificarte");
    }
    navigate("/")
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <main className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Iniciar sesión</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mt-1 ">
                    <label>Email address</label>
                    <input
                      value={usuario.email}
                      onChange={handleSetUsuario}
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Ingresa un correo"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                      value={usuario.password}
                      onChange={handleSetUsuario}
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Contraseña"
                    />
                  </div>
                  <button
                    onClick={iniciarSesion}
                    className="btn btn-primary btn-block mt-1"
                  >
                    Iniciar sesión
                  </button>
                  <div>
                    <Link to="/CrearCuenta">
                      <button className="btn btn-secondary btn-block mt-1">
                        Crear Cuenta
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
