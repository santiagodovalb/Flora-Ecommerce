import axios from "axios";
import React from "react";
import "../styles/Card.css";
import { message }from 'antd'

export default function Card({ product }) {

  const handleClick = (e) => {
    e.preventDefault();
    axios.post('/api/shop/add', {ProductId: product.id, cantidad: 1})
    .then(() => message.success('Product added'))
    .catch(err => message.error('Unable to add'))
  }

  return (
    <div className="wrapper">
      <div className="product-img">
        <img src={product.imagen} alt={product.nombre} />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{product.nombre}</h1>

          {/* <p>{product.descripcion}</p> */}
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
