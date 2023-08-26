import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'


const IconCounter = () => {
    const { cart } = useContext(MyContext)

    const Contador = cart.reduce((acc, el) => acc + el.quanty, 0);

    return (
        <div>

            <h6 className="text-danger">{Contador}</h6> {/* Contador en color rojo */}


        </div>
    )
}

export default IconCounter
