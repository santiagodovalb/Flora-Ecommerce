import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({
    nick: "",
    email: "",
    direccion: "",
    telefono: "",
    password: "",
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

    // axios
    //   .post("/api/user/", form)
    //   .then(() => {
    //     history.push("/login");
    //     message.success("User created successfully");
    //   })
    //   .catch((err) => err);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label for="username">Username</label>
        <input onChange={handleChange} type="text" name="username" />
        <label for="email">Email</label>
        <input
          onChange={handleChange}
          onBlur={validate}
          type="text"
          name="email"
        />
        <label for="direccion">Direccion</label>
        <input onChange={handleChange} type="text" name="direccion" />
        <label for="telefono">Telefono</label>
        <input onChange={handleChange} type="text" name="telefono" />
        <label for="password">Password</label>
        <input
          onChange={handleChange}
          onBlur={validate}
          type="password"
          name="password"
        />
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
      <Link to="/login">
        <h3>Already have an account? Login</h3>
      </Link>
    </div>
  );
}

export default Login;
