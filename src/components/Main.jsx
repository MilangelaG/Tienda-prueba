import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../context/MyContext'
import Funkos from '../Pages/Funkos'
import Footer from './Footer'

const Main = () => {
    const { dataFunkos, setDataFunkos } = useContext(MyContext)
    return (
        <div >
            <div className='d-flex flex-row flex-wrap'>
                {dataFunkos.map(funkos => <Funkos key={funkos.id} funkos={funkos} />)}

            </div>

            <Footer />

        </div>
    )
}

export default Main
