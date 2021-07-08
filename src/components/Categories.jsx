import React from 'react'
import { useEffect } from 'react';
import { setCategoryProducts } from '../state/products'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import Products from './Products';

export default function Categories() {

    const dispatch = useDispatch();

    const { type } = useParams();

    useEffect(() => {
        dispatch(setCategoryProducts(type))
    }, [type, dispatch]);

    return (
        <div>
            <Products />
        </div>
    )
}
