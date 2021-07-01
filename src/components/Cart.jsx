import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { setCart } from '../state/cart';
import { useEffect, useState } from 'react'
import '../styles/Cart.css';
import { message } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom'

function Cart() {

    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart)

    useEffect(() => {
        dispatch(setCart())
    }, [])

    const user = useSelector(state => state.user)

    const handleClear = (id) => {
        axios.delete(`/api/shop/${id}`)
        .then(() => {
            message.success('Product deleted')
            dispatch(setCart())
        })
        .catch(err => message.error('Unable to delete'))
        
      }

    return(
        <div>
            {!cartProducts.length && <h1>No products added</h1>}
            {cartProducts.map(product => {
                return (
                    <div className='cart'>
                        <Link to={`/products/${product.ProductId}`}>
                        <img src={product.Product.imagen} alt={'imagen de producto'} />
                        </Link>
                        <h1>{product.Product.nombre}</h1>
                        <h2>Cantidad: {product.cantidad}</h2>
                        <button onClick={() => handleClear(product.ProductId)} className='clear' type="button">Clear</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart