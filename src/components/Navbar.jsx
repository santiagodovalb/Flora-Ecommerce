import React from "react";
import "../styles/Navbar.css";
import "../assets/logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { message } from "antd";
import { setUser } from "../state/user";
import axios from "axios";
import navLogo from "../assets/Title.png";
import userIcon from "../assets/userIcon.png";
import registerIcon from "../assets/registerIcon.png";
import lupa from "../assets/lupa.png";
import logOut from "../assets/logout.png";
import llave from '../assets/llave.png'
import { setCategories } from "../state/categories";

function Navbar() {
  const [search, setSearch] = useState("");
  const categorias = useSelector(state => state.categories)

  useEffect(() => {
    dispatch(setCategories())
  }, []);
  
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${search}`);
  };

  const handleLogout = (e) => {
    axios
      .post("/api/users/logout")
      .then((res) => {
        message.success("Logout successfully");
        dispatch(setUser({}));
        history.push("/");
        return res;
      })
      .catch((err) => err);
  };

  const user = useSelector((state) => state.user);
  return (
    <div className="topnav">
      <Link to="/">
        <img className="logo" src={navLogo} alt="logo" />
      </Link>
      

      <div className="search">
        <form onSubmit={handleSubmit}>
          <img className="png" src={lupa} alt="searchImg" />

          <input
            className="searchInput"
            onChange={handleChange}
            type="text"
            placeholder="What are you looking for?"
          />
        </form>
      </div>
      <div class="dropdown">
        <button class="dropbtn">≡ Categories</button>
        <div class="dropdown-content">
          <Link to='/'>
          <p>todas</p>
          </Link>
          {categorias.map((categorie) => {
            return <Link to={`/categorie/${categorie.type}`}>
              <p>{categorie.type}</p>
            </Link>
          })}
        </div>
      </div>
      <div className="links">

      {user.rolId === 1 || user.rolId === 3 && (
          <Link to="/admin">
            <img className="png" src={llave} alt="adminImg" />
            <h3>- Admin</h3>
          </Link>
        )}

        {!user.nick && (
          <Link to="/login">
            <img className="png" src={userIcon} alt="searchImg" />
            <h3>- Log in</h3>
          </Link>
        )}

        {!user.nick && (
          <Link to="/register">
            <img className="png" src={registerIcon} alt="searchImg" />
            <h3>- Register</h3>
          </Link>
        )}

        {user.nick && (
          <Link to="/user">
            <img className="png" src={userIcon} alt="userImg" />
            <h3>- {user.nick}</h3>
          </Link>
        )}

        {user.nick && (
          <div onClick={handleLogout} style={{ cursor: "pointer" }}>
            <img className="png" src={logOut} alt="searchImg" />
            <h3>- Log out</h3>
          </div>
        )}

        <Link to={user.id ? "/cart" : "/login"}>
          <img
            className="png"
            src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
            alt="searchImg"
          />
          <h3>- My cart</h3>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
