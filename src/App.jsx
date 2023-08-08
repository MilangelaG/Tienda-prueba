import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Main from './components/Main'
import Perfil from './Pages/Perfil';
import Detalles from './Pages/Detalles';
import Carrito from './Cartcontent/Carrito';
import Login from './Pages/Login';
import { MyContext } from './context/MyContext';


const App = () => {
  const [dataFunkos, setDataFunkos] = useState([]) //productos
  const [cart, setCart] = useState([])  // carrito
  const [total, setTotal] = useState(0) //total

  const api = "./src/data/DataTest.json"

  const getDataFunkos = async()=>{
    const response = await fetch(api)
    let dataFunkos = await response.json()

    dataFunkos=dataFunkos.map((funkos)=>({
      id: funkos.id,
      nombre: funkos.nombre,
      image: funkos.image,
      detalles: funkos.detalles,
      precio: funkos.precio
    }))
    setDataFunkos(dataFunkos)
  }

  useEffect(()=>{
    getDataFunkos()
  },[])

  return (
    <>
      <MyContext.Provider value={{ dataFunkos, setDataFunkos, cart, setCart, total, setTotal }}>
        <Navbar />


        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='Perfil' element={<Perfil />} />
          <Route path="/Detalles/:id" element={<Detalles />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="Login" element={<Login />} />
          <Route path='*' element="no encontrado" />
        </Routes>   


      </MyContext.Provider>
    </>
  )
}

export default App
