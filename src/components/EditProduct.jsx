import React from 'react'
import { useState , useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setProducts } from '../state/products';
import { useHistory } from 'react-router';
import FormProduct from './FormProduct';

export default function EditProduct({id}) {

    const [product, setProduct] = useState({});
    const [productForm, setProductForm] = useState({})

    const dispatch = useDispatch()
    const history = useHistory()

    const categories = useSelector(state => state.categories)

    const handleChange = (e) => {
        setProductForm({...productForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`/api/products/${id}`, productForm)
        .then(res => res.data)
        .then(() => {
            dispatch(setProducts())
            history.push(`/products/${id}`)})
    }


    useEffect(() => {
        axios
      .get(`/api/products/${id}`)
      .then((res) => res.data)
      .then(product => {
          setProduct(product)
          setProductForm(product)
        })
    }, [id])

    const handleDelete = () => {
        axios.delete(`/api/products/${id}`)
        .then(() => history.push('/admin/products'))
    }

    return (
        <div>
            <h1>Edit {product.nombre}</h1>
            <FormProduct product={product} handleChange={handleChange} handleSubmit={handleSubmit} categories={categories} />
            <button onClick={handleDelete} type='button'>Eliminar producto</button>
        </div>
    )
}
