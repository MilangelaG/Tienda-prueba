import { createContext, useEffect, useState } from "react";

export const MyContext = createContext()

const DataProvider = ({ children }) => {
    const [dataFunkos, setDataFunkos] = useState([]) //productos
    const [dataPedidos, setDataPedidos] = useState([]) //pedidos
    const [cart, setCart] = useState([])  // carrito
    /* const [total, setTotal] = useState(0) */ //total



    const api = "./src/data/DataTest.json";
    const api_pedidos = "./src/data/DataPedidosTest.json";

    const getDataFunkos = async () => {
        const response = await fetch(api)
        let dataFunkos = await response.json()

        dataFunkos = dataFunkos.map((funkos) => ({
            id: funkos.id,
            nombre: funkos.nombre,
            image: funkos.image,
            detalles: funkos.detalles,
            precio: funkos.precio,
            quanty: funkos.quanty
        }))
        setDataFunkos(dataFunkos)
    }

    const getDataPedidos = async () => {
        const response = await fetch(api_pedidos)
        let pedidos = await response.json()

        pedidos = pedidos.map((pedido) => ({
            id: pedido.id,
            numero: pedido.numero,
            monto_pagado: pedido.monto_pagado,
            descripcion: pedido.descripcion,
            fecha_de_entrega: pedido.fecha_de_entrega
        }))
        setDataPedidos(pedidos)
    }

    useEffect(() => {
        getDataFunkos()
        getDataPedidos()
    }, [])

    const addFunko = (funkos) => {

        const funkoRepeat = cart.find((item) => item.id === funkos.id);

        if (funkoRepeat) {
            setCart(cart.map((item) => (item.id === funkos.id ? {
                ...funkos, quanty: funkoRepeat.quanty + 1
            } : item)))
        } else {
            setCart([...cart, funkos])
        }
    };


    return (
        <MyContext.Provider value={{ dataFunkos, setDataFunkos, cart, setCart, addFunko, dataPedidos }}>{children}</MyContext.Provider>
    )
};


export default DataProvider;