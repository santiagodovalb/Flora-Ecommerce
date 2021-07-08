import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/SingleOrder.css";

export default function SingleOrder() {
  const singleOrder = useSelector((state) => state.singleOrder);

  return (
    <div className="singleOrderWrapper">
      <h1>Pedido orden numero {singleOrder.id}</h1>
      {singleOrder.carritos.map((order) => {
        return (
          <div key={order.id} className="singleOrder">
            <Link to={`/products/${1}`}>
              <img src={order.Product.imagen} alt={"imagen de producto"} />
            </Link>
            <h1>
              {order.Product.nombre} ($
              {order.Product.precio})
            </h1>
            <h2>
              Cantidad: {order.cantidad} ($
              {order.cantidad * order.Product.precio})
            </h2>
          </div>
        );
      })}
    </div>
  );
}

