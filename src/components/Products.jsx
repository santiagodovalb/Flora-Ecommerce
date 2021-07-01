import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";
import "../styles/Products.css";

function Products({ products }) {
  return (
    <div>
      <div className='logoTitle'>
        <img src="https://i.imgur.com/dUtQOFT.png" alt="logo" />
        <h1 className="productsTitle">Our Products</h1>
      </div>
      <div className="productDiv">
        {products.map((product) => {
          return (
            <Link key={product.id} to={`/products/${product.id}`}>
              <Card product={product} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
