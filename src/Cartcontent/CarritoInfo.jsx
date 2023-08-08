import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import CartItem from './CartItem';

const CarritoInfo = () => {

  const { cart, setCart } = useContext(MyContext);

  const deleteFunko = (id) => {
    const foundId = cart.find((item) => item.id === id);

    const newCart = cart.filter((item) => {
      return item !== foundId;
    });

    setCart(newCart)
  };

  return cart.map((funkos) => {
    return (
      <div className="container my-3" key={funkos.id}>
        <div className="card shadow">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={funkos.image} className="card-img-top" alt={funkos.nombre} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{funkos.nombre}</h5>
                <p className="card-text">{funkos.detalles}</p>
                <h4 className="text-primary">${funkos.precio * funkos.quanty}</h4>
                <div className="d-flex justify-content-between align-items-center">
                  <CartItem funkos={funkos} />
                  <h4 className='btn btn-danger' onClick={() => deleteFunko(funkos.id)}>✖️</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default CarritoInfo;
