import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/OrderHistory.css";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("/api/shop/order")
      .then((res) => res.data)
      .then((ord) => setOrders(ord));
  }, [orders]);

  const handleCancel = (id) => {
    axios.put(`/api/shop/order/cancelled/${id}`)
  }

  return (
    <div>
      <table className="orderTable">
        <tr>
          <th>Creado</th>
          <th>Pedido Id</th>
          <th>Estado</th>
          <th>Total</th>
          <th></th>
        </tr>
        {orders.map((order) => {
          return (

            <tr>
              <td>{order.createdAt.slice(0, 10)}</td>
              <td>{order.id}</td>
              <td>{order.estado}</td>
              <td>$ {order.total}</td>
              <td><button type='button' onClick={() => handleCancel(order.id)}>Cancelar pedido</button></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

// fecha
// id
// total - plata
// estado
