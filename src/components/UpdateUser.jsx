import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import "../styles/Register.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from '../state/user'

function UpdateUser() {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

  const [form, setForm] = useState({
    nick: user.nick,
    email: user.email,
    direction: user.direction,
    phone: user.phone,
    password: user.password,
  });

  const validate = (e) => {
    let mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let checkLen = /.{8,}/;
    let upperCase = /[A-Z]/;

    if (e.target.name === "email") {
      if (!form.email.match(mailformat)) {
        message.error("Please insert a valid e-mail");
      }
    } else if (e.target.name === "password") {
      if (!form.password.match(checkLen) || !form.password.match(upperCase)) {
        message.error(
          "Your password must have an uppercase and at least 8 characters"
        );
      }
    }
  };

  const history = useHistory();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`/api/users/edit/${user.id}`, form)
      .then(res => res.data)
      .then((user) => {
        history.push("/user");
        dispatch(setUser(user))
        message.success("User updated successfully");
      })
      .catch((err) => {
        message.error("User not updated");
        return err;
      });
  };

  return (
    <div className="register">
      <h1>Update your info</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          onBlur={validate}
          type="text"
          name="email"
          defaultValue={user.email}
        />
        <label htmlFor="direction">Direction</label>
        <input onChange={handleChange} type="text" name="direction" defaultValue={user.direction}/>
        <label htmlFor="phone">Phone</label>
        <input onChange={handleChange} type="text" name="phone" defaultValue={user.phone}/>
        <button className="submit" type="submit" value="submit">
          Submit
        </button>
      </form>
     
    </div>
  );
}

export default UpdateUser;
