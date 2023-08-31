/* import React, { useState } from 'react';
import axios from 'axios';

const ComponenteDeIngreso = () => {
  const [nombre, setNombre] = useState('');
  const [url, setURL] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [valor, setValor] = useState('');

  const api = "http://localhost:3000/agregar_producto";

  const getDataFunkos = async () => {
    const response = await axios.get(api);
    let dataFunkos = response.data;

    dataFunkos = dataFunkos.map((funkos) => ({
      id: funkos.id,
      nombre: funkos.nombre,
      image: "/src/assets/" + funkos.img_path,
      detalles: funkos.descripcion,
      precio: funkos.valor,
      quanty: 1
    }));
    setDataFunkos(dataFunkos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      nombre,
      img_path: url,
      descripcion,
      valor
    };

    try {
      await axios.post(api, newProduct);
      await getDataFunkos();

      setNombre('');
      setURL('');
      setDescripcion('');
      setValor('');
    } catch (error) {
      console.error('Error al agregar el producto:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Ingrese los datos</h2>
      <form >
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="url" className="form-label">URL:</label>
          <input
            type="text"
            className="form-control"
            id="url"
            value={url}
            onChange={(e) => setURL(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción:</label>
          <textarea
            className="form-control"
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="valor" className="form-label">Valor:</label>
          <input
            type="number"
            className="form-control"
            id="valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </div>
        <button type="submit" onSubmit={handleSubmit} className="btn btn-primary">Guardar</button>
      </form>
    </div>
  );
};

export default ComponenteDeIngreso;
 */