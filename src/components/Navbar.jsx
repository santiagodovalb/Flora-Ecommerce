import React from "react";
import "../styles/Navbar.css";
import "../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="topnav">
      <Link to='/'>
      <img className="logo" src="https://i.imgur.com/yFqKvGU.png" alt="logo" />
      </Link>
      <div className="search">
        <img
          className="png"
          src="https://www.clipartmax.com/png/full/279-2795130_search-magnifying-glass-search-icon-transparent.png"
          alt="searchImg"
        />
        <input
          className="searchInput"
          onChange={handleChange}
          type="text"
          placeholder="What are you looking for?"
        />
      </div>
      <div className="links">
        <Link to="/login">
        <img
          className="png"
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          alt="searchImg"
        />
          <h3>- Log in</h3>
        </Link>
        <Link to="/register">
        <img
          className="png"
          src="https://freepikpsd.com/media/2019/10/register-icon-png-4-Transparent-Images.png"
          alt="searchImg"
        />
          <h3>- Register</h3>
        </Link>
        <Link to="/cart/:id">
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
