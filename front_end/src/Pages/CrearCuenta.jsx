import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const CrearCuenta = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        correo: "",
        clave: "",
        direccion: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        crearCuenta()
    }

    const handleSetForm = ({ target: { value, name } }) => {
        const field = {};
        field[name] = value;
        setFormData({ ...formData, ...field });
    }

    const crearCuenta = async () => {
        const { correo, clave, direccion} = formData;
        if (!correo || !clave || !direccion) return alert("Parece que faltan campos");
        const api = "http://localhost:3001/crear_cuenta";
        let form = {
            email: correo,
            password: clave,
            direccion: direccion,
        }
        const response = await axios.post(api, form)
        let dataUser = await response.data;
        console.log(dataUser)
        if (dataUser) {
          alert("Usuario identificado con éxito 😀");
        }else{
          alert("Ops no hemos podido identificarte");
        }
        navigate("/login")
    }

    return (
        <div>
            <main className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title text-center">Crear Cuenta</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="correo">Correo Electronico</label>
                                        <input value={formData.correo}
                                            type="email"
                                            name="correo"
                                            className="form-control"
                                            onChange={handleSetForm}
                                            required
                                            />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="clave">Contraseña</label>
                                        <input value={formData.clave}
                                            type="password"
                                            name="clave"
                                            className="form-control"
                                            onChange={handleSetForm}
                                            required
                                            />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="direccion">Dirección</label>
                                        <input className="form-control"
                                               type="text"
                                               name="direccion"
                                               value={formData.direccion}
                                               id="direccion"
                                               onChange={handleSetForm}
                                               required
                                               /> 
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
