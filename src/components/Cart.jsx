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

    const calcularTotal = () => {
        let total = 0
        for (let i = 0; i < cartProducts.length; i++) {
            total += cartProducts[i].cantidad * cartProducts[i].Product.precio
        }
        return total
    }


    const handleClear = (id) => {
        axios.delete(`/api/shop/${id}`)
        .then(() => {
            message.success('Product deleted')
            dispatch(setCart())
        })
        .catch(err => message.error('Unable to delete'))
      }

    const handleMore = (product) => {
        if (product.cantidad < product.Product.stock) {
            axios.post(`/api/shop/${product.ProductId}/amount`, {
                mode: 'suma'
            })
            .then(() => dispatch(setCart()))
        }
        else {
            message.error('No more stock available')
        }
    }

    const handleLess = (product) => {
        if (product.cantidad === 1) handleClear(product.ProductId)
        else {
            axios.post(`/api/shop/${product.ProductId}/amount`, {
                mode: 'resta'
            })
            .then(() => dispatch(setCart()))
        }
        
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
                        <h1>{product.Product.nombre} (${product.Product.precio})</h1>
                        <h2>Cantidad: {product.cantidad} (${product.cantidad * product.Product.precio})</h2>
                        <button onClick={() => handleClear(product.ProductId)} className='clear' type="button">Clear</button>
                        <button onClick={() => handleMore(product)} className='clear' type="button">+</button>
                        <button onClick={() => handleLess(product)} className='clear' type="button">-</button>
                    </div>
                )
            })}
            {cartProducts.length ? <h2 className='total'>Total a pagar: ${calcularTotal()}</h2> : ''}
        </div>
    )
}

export default Cart