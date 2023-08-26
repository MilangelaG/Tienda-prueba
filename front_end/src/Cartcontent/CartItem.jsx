import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const CartItem = ({ funkos }) => {
    const { cart, setCart, addFunko } = useContext(MyContext);

    const removeFunko = () => {
        const funkoRepeat = cart.find((item) => item.id === funkos.id);

        if (funkoRepeat && funkoRepeat.quanty !== 1) {
            setCart(
                cart.map((item) =>
                    item.id === funkos.id
                        ? { ...funkos, quanty: funkoRepeat.quanty - 1 }
                        : item
                )
            );
        }
    };

    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div className='btn-group'>
                <button
                    className='btn btn-warning'
                    onClick={() => removeFunko(funkos)}
                >
                    -
                </button>
                <p className='m-2' >{funkos.quanty}</p>
                <button className='btn btn-warning' onClick={() => addFunko(funkos)}>
                    +
                </button>
            </div>
        </div>
    );
};

export default CartItem;

