import { createContext, useEffect, useState } from "react";

export const MyContext = createContext()

const DataProvider = ({ children }) => {
    const [dataFunkos, setDataFunkos] = useState([]) //productos
    const [cart, setCart] = useState([])  // carrito
    /* const [total, setTotal] = useState(0) */ //total



    const api = "./src/data/DataTest.json";

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

    useEffect(() => {
        getDataFunkos()
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
        <MyContext.Provider value={{ dataFunkos, setDataFunkos, cart, setCart, addFunko }}>{children}</MyContext.Provider>
    )
};


export default DataProvider;