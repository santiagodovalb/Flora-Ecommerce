import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import "../styles/User.css";
import OrderHistory from "./OrderHistory";
import { useDispatch } from 'react-redux'
import {setUserOrders} from '../state/userOrders'

export default function User() {
  
  const orders = useSelector(state => state.userOrders)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUserOrders())
  }, [dispatch])

  const user = useSelector((state) => state.user);
  const history = useHistory();

  const handleClick = () => {
    history.push("/edit-user");
  };

  return (
    <div className="userWrapper">
      <h1>{user.nick}</h1>
      <h2>Direccion: {user.direction}</h2>
      <h2>Email: {user.email}</h2>
      <h2>Telefono: {user.phone}</h2>
      <button type="button" onClick={handleClick}>
        Editar info
      </button>
      <OrderHistory orders={orders}/>
    </div>
  );
}
