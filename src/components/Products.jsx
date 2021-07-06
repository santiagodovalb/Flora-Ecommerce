import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";
import "../styles/Products.css";
import { useLocation } from 'react-router'
import bodyLogo from '../assets/logo.png'
import { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router";

function Products() {

  const [categorias, setCategorias] = useState([])
  const history = useHistory();

  useEffect(() => {
    axios.get('/api/category')
    .then(res => res.data)
    .then(cats => setCategorias(cats))
    .catch(err => console.log(err))
  }, [])

  const location = useLocation()
  const products = useSelector(state => state.products)
  const categorie = location.pathname.slice(11)

  const handleClick = (e) => {
    history.push(`/category/${e.target.value}`)
}

  return (
    <div className='products'>
      <div className='logoTitle'>
        <img src={bodyLogo} alt="logo" />
        {console.log(categorie)}
        {location.pathname === '/' && <h1 className="productsTitle">Our Products</h1>}
        {location.pathname.includes('search') && <h1 className="productsTitle">Search results</h1>}
        {location.pathname.includes('categorie') && <h1 className="productsTitle">{categorie}</h1>}
      </div>
      <hr/>
      <div className="productDiv">
        {products && products.map((product) => {
          return (
            <div className='eachProduct'>
            <Link key={product.id} to={`/products/${product.id}`}>
              <Card product={product} />
            </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
