import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyContext = createContext()

const DataProvider = ({ children }) => {
    const [dataFunkos, setDataFunkos] = useState([]) //productos
    const [dataPedidos, setDataPedidos] = useState([]) //pedidos
    const [cart, setCart] = useState([])  // carrito
    const [user, setUser] = useState("");
    /* const [total, setTotal] = useState(0) */ //total



    const api = "http://localhost:3001/listar_productos";
    const api_pedidos = "./src/data/DataPedidosTest.json";

    const getDataFunkos = async () => {
        const response = await axios.get(api)
        let dataFunkos = response.data

        dataFunkos = dataFunkos.map((funkos) => ({
            id: funkos.id,
            nombre: funkos.nombre,
            image: "/src/assets/" + funkos.img_path,
            detalles: funkos.descripcion,
            precio: funkos.valor,
            quanty: 1
        }))
        setDataFunkos(dataFunkos)
    }
    const loggedIn = () => {
        return (user !== null && user.length > 0)
    }

    

    
    const getDataPedidos = async () => {
        let token = localStorage.getItem('token');
        const api = "http://localhost:3001/listar_pedidos";
        var req = axios.create({
          headers: { Authorization: "Bearer " + token}
        })
        const response = await(req.get(api));
        let pedidos = response.data

        pedidos = pedidos.map((pedido) => ({
            id: pedido.id,
            numero: pedido.id,
            monto_pagado: pedido.monto_pagado,
            descripcion: pedido.descripcion,
            fecha_de_entrega: pedido.fecha_de_entrega
        }))
        setDataPedidos(pedidos)
    }

    useEffect(() => {
        getDataFunkos()
        setUser(localStorage.getItem('usuario'))
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
        <MyContext.Provider value={
            {
                dataFunkos,
                setDataFunkos,
                cart,
                setCart,
                addFunko,
                dataPedidos,
                user,
                setUser,
                loggedIn,
                getDataPedidos,
            }
        }>{children}</MyContext.Provider>
    )
};


export default DataProvider;