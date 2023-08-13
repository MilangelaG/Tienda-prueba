import React, { useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import Main from './components/Main'
import Perfil from './Pages/Perfil';
import Detalles from './Pages/Detalles';
import Carrito from './Cartcontent/Carrito';
import Login from './Pages/Login';
import CrearCuenta from './Pages/CrearCuenta';
import Pedidos from './Pages/Pedidos';
import DataProvider from './context/MyContext';


const App = () => {

  return (

    <DataProvider >


      <Navbar />


      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='Perfil' element={<Perfil />} />
        <Route path="/Detalles/:id" element={<Detalles />} />
        <Route path="/Carrito" element={<Carrito />} />
        <Route path="Login" element={<Login />} />
        <Route path="/CrearCuenta" element={<CrearCuenta />} />
        <Route path="/Pedidos" element={<Pedidos />} />
        <Route path='*' element="no encontrado" />
      </Routes>



    </DataProvider>

  )
}

export default App
