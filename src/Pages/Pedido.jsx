import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MyContext } from '../context/MyContext'


const Pedido = ({ pedido }) => {

    const {} = useContext(MyContext)
    const navigate = useNavigate()
    return (
        <tr>
            <td> {pedido.numero} </td>
            <td> {pedido.monto_pagado} </td>
            <td> {pedido.descripcion} </td>
            <td> {pedido.fecha_de_entrega} </td>
        </tr>

    )
}




export default Pedido
