import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Products() {

    const products = useSelector(state => state.products)

    return (
        <div>
            <h1>Products</h1>
            <ul>
            {products.map(product => {return (
                <Link to={`/products/${product.imdbID}`}>
                <li>{product.Title}</li>
                </Link>
            )})}
            </ul>
        </div>
    )
}

export default Products