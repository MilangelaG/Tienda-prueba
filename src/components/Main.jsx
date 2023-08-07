import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../context/MyContext'
import Funkos from '../Pages/Funkos'

const Main = () => {
    const { dataFunkos, setDataFunkos } = useContext(MyContext)
    return (
        <div className='container m-2'>
            <div className='d-flex flex-row flex-wrap'>
                {dataFunkos.map(funkos => <Funkos key={funkos.id} funkos={funkos} />)}
            </div>

        </div>
    )
}

export default Main
