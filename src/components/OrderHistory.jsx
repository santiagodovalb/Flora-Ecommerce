import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/OrderHistory.css";
import { useHistory, useLocation } from "react-router";
import { setSingleOrder } from "../state/order";
import { useDispatch } from "react-redux";
import { setAllOrders } from "../state/allOrders";

export default function OrderHistory({ orders }) {

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const handleCancel = (id, e) => {
    e.stopPropagation()
    e.preventDefault();
    axios.put(`/api/shop/order/cancelled/${id}`)
    .then(() => dispatch(setAllOrders()))
  };

  const handleClick = (ord) => {
    dispatch(setSingleOrder(ord));
    history.push(`/order/${ord.id}`);
  };

  const handleDelivered = (id, e) => {
    e.stopPropagation()
    e.preventDefault();
    axios.put(`/api/shop/order/delivered/${id}`)
    .then(() => dispatch(setAllOrders()))
  }

  return (
    <div>
      {console.log('algo')}
      <table className="orderTable">
        <tr>
          <th>Creado</th>
          <th>Pedido Id</th>
          <th>Estado</th>
          <th>Total</th>
          <th></th>
          {location.pathname.includes("admin") && <th></th>}
        </tr>
        {orders.map((order) => {
          return (
            <tr onClick={() => handleClick(order)}>
              <td>{order.createdAt.slice(0, 10)}</td>
              <td>{order.id}</td>
              <td>{order.estado}</td>
              <td>$ {order.total}</td>
              <td>
                <button
                  type="button"
                  onClick={(e) => handleCancel(order.id, e)}
                >
                  Cancelar pedido
                </button>
              </td>
              {location.pathname.includes("admin") && (
                <td>
                  <button
                    type="button"
                    onClick={(e) => handleDelivered(order.id, e)}
                  >
                    Marcar como entregado
                  </button>
                </td>
              )}
            </tr>
          );
        })}
      </table>
    </div>
  );
}
