import axios from "axios";
import React from "react";
import "../styles/Card.css";
import { message }from 'antd';
import { useSelector } from 'react-redux'

export default function Card({ product }) {

  const user = useSelector(state => state.user)

  const handleClick = (e) => {
    e.preventDefault();

    // COMPORTAMIENTO CON USUARIO LOGEADO
    if(user.id) {
      axios.post('/api/shop/add', {ProductId: product.id, cantidad: 1})
      .then(() => message.success('Product added'))
      .catch(err => message.error('Unable to add'))
    }

    else{
      let localProduct = {ProductId: product.id, cantidad: 1}
      let storageProducts = window.localStorage.getItem('CART') ? `${window.localStorage.getItem('CART')} AND ${JSON.stringify(localProduct)}` : JSON.stringify(localProduct)
      window.localStorage.setItem('CART', storageProducts)
      message.success('Product added')
    }

  }

  return (
    <div className="wrapper">
      <div className="product-img">
        <img src={product.imagen} alt={product.nombre} />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{product.nombre}</h1>
        </div>
        <div className="product-price-btn">
          <p>
            <span>{product.precio}</span>$
          </p>
          <button onClick={handleClick} type="button">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}
