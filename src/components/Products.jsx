import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";
import "../styles/Products.css";
import { useLocation } from 'react-router'
import bodyLogo from '../assets/logo.png'

function Products({ products }) {

  const location = useLocation()

  return (
    <div className='products'>
      <div className='logoTitle'>
        <img src={bodyLogo} alt="logo" />
        <h1 className="productsTitle">{ location.pathname === '/' ? 'Our Products' : 'Search results'}</h1>
      </div>
      <hr/>
      <div className="productDiv">
        {products.map((product) => {
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
