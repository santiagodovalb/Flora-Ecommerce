import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { setCategoryProducts } from '../state/products'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';
import Products from './Products';

export default function Categories() {

    const [categorias, setCategorias] = useState([])
    const dispatch = useDispatch();

    const { type } = useParams();

    useEffect(() => {
        dispatch(setCategoryProducts(type))
    }, [type]);

    return (
        <div>
            <Products />
        </div>
    )
}
