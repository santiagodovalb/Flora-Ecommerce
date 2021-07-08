import React from 'react'
import Products from './Products'
import { useDispatch } from 'react-redux'
import { setProducts } from '../state/products'
import { useEffect } from 'react'

export default function Home() {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts());
    }, [dispatch])

    return (
        <div>
            <Products />
        </div>
    )
}
