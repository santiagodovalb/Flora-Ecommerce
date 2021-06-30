import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { setUser } from "../state/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios y autenticacion
    dispatch(setUser(form));
    history.push("/");
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input onChange={handleChange} type="text" name="username" />
        <label htmlFor="password">Password</label>
        <input onChange={handleChange} type="password" name="username" />
        <button className="submit" type="submit" value="submit">
          Submit
        </button>
      </form>
      <Link to="/register">
        <h3>Don't have an account? Register</h3>
      </Link>
    </div>
  );
}

export default Login;
