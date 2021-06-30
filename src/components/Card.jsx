import React from "react";
import "../styles/Card.css";

export default function Card({ product }) {
  return (
    // <div className="cardDiv">
    //   <h1>{product.nombre}</h1>
    //   <img src={product.imagen} alt={product.nombre} />
    //   <h3>Precio: {product.precio}</h3>
    //   <h3>Stock: {product.stock}</h3>
    // </div>

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
          <button type="button">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}
