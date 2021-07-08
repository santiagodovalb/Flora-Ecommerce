import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import "../styles/Register.css";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({
    nick: "",
    email: "",
    direction: "",
    phone: "",
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

    axios
      .post("/api/users/register", form)
      .then(() => {
        history.push("/login");
        message.success("User created successfully");
      })
      .catch((err) => {
        message.error("User not created");
        return err;
      });
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="nick">Username</label>
        <input onChange={handleChange} type="text" name="nick" />
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          onBlur={validate}
          type="text"
          name="email"
        />
        <label htmlFor="direction">Direction</label>
        <input onChange={handleChange} type="text" name="direction" />
        <label htmlFor="phone">Phone</label>
        <input onChange={handleChange} type="text" name="phone" />
        <label htmlFor="password">Password</label>
        <input
          onBlur={validate}
          onChange={handleChange}
          type="password"
          name="password"
        />
        <button className="submit" type="submit" value="submit">
          Submit
        </button>
      </form>
      <Link to="/login">
        <h3>Already have an account? Login</h3>
      </Link>
    </div>
  );
}

export default Register;
