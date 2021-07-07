import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { setProducts } from '../state/products'
import { useEffect } from 'react'

export default function AdminProducts() {

    const [productForm, setProductForm] = useState({})
    const history = useHistory();
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(setProducts())
    }, [])

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

    const handleEdit = () => {
        document.getElementById('editProducts').style.display = document.getElementById('editProducts').style.display === 'none' ? 'block' : 'none'
    }

    const editPush = (id) => {
        history.push(`/admin/products/${id}`)
    }

    const categories = useSelector(state => state.categories)

    return (
        <div>
            {console.log('prods', products)}
            <h1>Manage Products</h1>
            <button onClick={handleAdd} type='button'>Add product</button>
            <button onClick={handleEdit} type='button'>Edit product</button>

            <form id='addProduct' onSubmit={handleSubmit} style={{display: 'none'}}>
                <label type="text" for='nombre'>Nombre:</label>
                <input onChange={handleChange} name='nombre'></input>

                <label type="text" for='precio'>Precio:</label>
                <input onChange={handleChange} name='precio'></input>

                <label type="text" for='imagen'>URL Imagen:</label>
                <input onChange={handleChange} name='imagen'></input>

                <label for='descripcion'>Descripcion:</label>
                <input onChange={handleChange} type='text' name='descripcion'></input>

                <label for='stock'>Stock:</label>
                <input onChange={handleChange} type="text" name='stock'></input>

                <label for='categoria'>Categoria:</label>
                <select onChange={handleChange} name='CategoryId'>
                    <option>Seleccionar categoria</option>
                    {categories.map(categorie => {
                        return (
                            <option value={categorie.id}>{categorie.type}</option>
                        )
                    })}
                </select>
                <button type='submit'>Añadir producto</button>
            </form>
            <div style={{display: 'none'}} id='editProducts'>
            {products.map(product => {
                return (
                    <button onClick={() => editPush(product.id)} type='button'>{product.nombre}</button>
                )
            })}
            </div>
        </div>
    )
}

