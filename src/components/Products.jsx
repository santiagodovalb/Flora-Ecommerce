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

  const handleClick = (e) => {
    history.push(`/category/${e.target.value}`)
}

  return (
    <div className='products'>
      <div className='logoTitle'>
        <img src={bodyLogo} alt="logo" />
        <h1 className="productsTitle">{ location.pathname === '/' ? 'Our Products' : 'Search results'}</h1>
      </div>
      <hr/>
      <div className='categories'>
      {categorias.map(categoria => {
                return (
                    <div key={categoria.id}>
                        <button className='buttons' onClick={handleClick} value={categoria.type}>{categoria.type}</button>
                    </div>
                )
            })}
      </div>
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
