import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";
import "../styles/Products.css";

function Products({ products }) {

  return (
    <div>
      <h1 className="productsTitle">Our Products</h1>
      <div className="productDiv">
        {products.map((product) => {
          return (
            <Link to={`/products/${product.id}`}>
              <Card product={product} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
