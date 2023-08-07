import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import Perfil from './Pages/Perfil';
import Detalles from './Pages/Detalles';
import Carrito from './Pages/Carrito';
import Login from './Pages/Login';
import { funkos } from './data/DataTest'
import { MyContext } from './context/MyContext';


const App = () => {
  const [dataFunkos, setDataFunkos] = useState(funkos)

  return (
    <>
      <MyContext.Provider value={{dataFunkos, setDataFunkos}}>
        <Navbar />


        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='Perfil' element={<Perfil />} />
          <Route path="Detalles/:id" element={<Detalles />} />
          <Route path="Carrito" element={<Carrito />} />
          <Route path="Login" element={<Login />} />
          <Route path='*' element="no encontrado" />
        </Routes>





        <Footer />


      </MyContext.Provider>
    </>
  )
}

export default App
