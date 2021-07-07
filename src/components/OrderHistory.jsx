import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/OrderHistory.css";
import { useHistory } from "react-router";
import { setSingleOrder } from "../state/order";
import { useDispatch } from "react-redux";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    axios
      .get("/api/shop/order")
      .then((res) => res.data)
      .then((ord) => setOrders(ord));
  }, []);

  const handleCancel = (id) => {
    axios.put(`/api/shop/order/cancelled/${id}`)
  }

  const handleClick = (ord) => {
    dispatch(setSingleOrder(ord));
    history.push(`/order/${ord.id}`);
  };

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
          console.log("order", order);
          return (
            <tr onClick={() => handleClick(order)}>
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
