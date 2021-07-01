import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { setCart } from '../state/cart';
import { useEffect, useState } from 'react'

function Cart() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCart())
    }, [])

    const user = useSelector(state => state.user)
    const cartProducts = useSelector(state => state.cart.arrayOfProducts)

    const strings = cartProducts.map(product => JSON.stringify(product))
    
    const filteredProducts = strings.filter( (product, index) => index === strings.lastIndexOf(product))
    const jsons = filteredProducts.map(product => JSON.parse(product))

    return(
        <div>
            {jsons.map(product => {
                return(
                <div>
                <img src={product.imagen} alt={product.nombre} />
                <h1>{product.nombre}</h1>
                </div>
                )}
            )}
        </div>
    )
}

export default Cart