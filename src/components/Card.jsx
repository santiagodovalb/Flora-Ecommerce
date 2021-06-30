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
        <img
          src={product.imagen}
          alt={product.nombre}
          height="420"
          width="327"
        />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{product.nombre}</h1>
          {/* <h2>by studio and friends</h2> */}
          {/* <p>Harvest Vases are a reinterpretation<br> of peeled fruits and vegetables as<br> functional objects. The surfaces<br> appear to be sliced and pulled aside,<br> allowing room for growth. </p> */}
          <p>{product.descripcion}</p>
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
