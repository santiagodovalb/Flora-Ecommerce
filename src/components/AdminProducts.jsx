import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { setProducts } from '../state/products'
import { useEffect } from 'react'
import Admin from "../components/Admin";
import FormProduct from './FormProduct'
import EditProduct from './EditProduct'


export default function AdminProducts() {

    const [productForm, setProductForm] = useState({})
    const [id, setId] = useState()
    const history = useHistory();
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(setProducts())
    }, [dispatch])

    const handleChange = (e) => {
        setProductForm({...productForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/products/', productForm)
        .then(res => res.data)
        .then(product => {
            console.log(product)
            dispatch(setProducts())
            history.push(`/products/${product.id}`)})
    }

    const handleAdd = () => {
        document.getElementById('addProduct').style.display = document.getElementById('addProduct').style.display === 'none' ? 'block' : 'none'
    }

    const handleProductsToEdit = () => {
        document.getElementById('ProductsToEdit').style.display = document.getElementById('ProductsToEdit').style.display === 'none' ? 'block' : 'none'
    }

    const editToggle = (id) => {
       // history.push(`/admin/products/${id}`)
        setId(id)
        document.getElementById('EditProduct').style.display = document.getElementById('EditProduct').style.display === 'none' ? 'block' : 'none'
    }

    const categories = useSelector(state => state.categories)

    return (
        <div>
            <Admin/>
            <h1>Manage Products</h1>
            <button onClick={handleAdd} type='button'>Add product</button>
            <button onClick={handleProductsToEdit} type='button'>Edit product</button>

            <div style={{display: 'none'}} id='addProduct'>
                <FormProduct handleSubmit={handleSubmit} handleChange={handleChange} categories={categories} />
            </div>
            <hr />
            <div style={{display: 'none'}} id='ProductsToEdit'>
            {products.map(product => {
                return (
                    <button onClick={() => editToggle(product.id)} type='button'>{product.nombre}</button>
                )
            })}
                <div style={{display: 'none'}} id='EditProduct'>
                    <EditProduct id={id}/>
                </div>
            </div>
        </div>
    )
}