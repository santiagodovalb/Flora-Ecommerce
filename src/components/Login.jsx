import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { setUser } from "../state/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "../styles/Login.css";
import axios from "axios";
import { message } from "antd";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/login", form)
      .then((res) => res.data)
      .then((user) => {
        console.log(user)
        dispatch(setUser(user));
        user.rolId != 2 ? history.push("/admin") : history.push("/");
        message.success("Logged in successfully");
      })
      .then(() => {
        if (window.localStorage.getItem("CART")) {
          const array = window.localStorage
            .getItem("CART")
            .split(" AND ")
            .map((product) => JSON.parse(product));
            window.localStorage.clear();
          array.forEach((product) => {
            axios.post("/api/shop/add", product);
          });
        }
      })
      .catch((err) => {
        message.error("Bad credentials");
        return err;
      });
  };

  return (
    <div className="login">
      <div className='logins'>
      <div className='userLogin'>
      <h1>User Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input onChange={handleChange} type="text" name="email" />
        <label htmlFor="password">Password</label>
        <input onChange={handleChange} type="password" name="password" />
        <button className="submit" type="submit" value="submit">
          Submit
        </button>
      </form>
      </div>
      <div className='adminLogin'>
      <h1>Admin Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input onChange={handleChange} type="text" name="email" />
        <label htmlFor="password">Password</label>
        <input onChange={handleChange} type="password" name="password" />
        <button className="submit" type="submit" value="submit">
          Submit
        </button>
      </form>
      </div>
      </div>
      <a href="http://localhost:3001/api/users/auth/facebook/">
        <h3>Ingresar con Facebook</h3>
      </a>
      <Link to="/register">
        <h3>Don't have an account? Register</h3>
      </Link>
    </div>
  );
}

export default Login;
