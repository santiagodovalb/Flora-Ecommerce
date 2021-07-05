import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";
import "../styles/Products.css";
import { useLocation } from 'react-router'
import bodyLogo from '../assets/logo.png'
import { useState } from "react";

function Products({ products }) {

  const location = useLocation()

  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    axios.get('')
  }, [])

  return (
    <div className='products'>
      <select name='categoria'>
        {categorias.map(categoria => {
          return (
            <option value={`${categoria.id}`}>{categoria.nombre}</option>
          )
        })}
        
      </select>
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
