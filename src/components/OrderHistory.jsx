import React from "react";
import axios from "axios";
import "../styles/OrderHistory.css";
import { useHistory, useLocation } from "react-router";
import { setSingleOrder } from "../state/order";
import { useDispatch } from "react-redux";
import { setAllOrders } from "../state/allOrders";
import { setUserOrders} from '../state/userOrders'

export default function OrderHistory({ orders }) {

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const handleCancel = (id, e) => {
    e.stopPropagation()
    e.preventDefault();
    axios.put(`/api/shop/order/cancelled/${id}`)
    .then(() => location.pathname.includes('admin') ? dispatch(setAllOrders()) : dispatch(setUserOrders()))
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
      <table className="orderTable">
        <thead>
        <tr>
          <th>Creado</th>
          <th>Pedido Id</th>
          <th>Estado</th>
          <th>Total</th>
          <th></th>
          {location.pathname.includes("admin") && <th></th>}
        </tr>
        </thead>
        {orders.map((order) => {
          return (
            <tbody key={order.id}>
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
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
