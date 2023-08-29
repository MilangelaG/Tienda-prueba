import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MyContext } from '../context/MyContext'
import Pedido from '../Pages/Pedido'
import Table from 'react-bootstrap/Table'


const Pedidos = () => {
    const { dataPedidos, getDataPedidos } = useContext(MyContext)
    useEffect(() => {
        getDataPedidos()
    }, [])

    return (
        <div className="container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th> Orden de Compra </th>
                        <th> Monto Pagado </th>
                        <th> Descripcion </th>
                        <th> Fecha de Entrega </th>
                    </tr>
                </thead>
                <tbody>
                    {dataPedidos.map(pedido => <Pedido key={pedido.id} pedido={pedido} />)}
                </tbody>

            </Table>
        </div>

    )
}




export default Pedidos
