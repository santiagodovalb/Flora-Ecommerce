import React from 'react'
import { useState , useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setProducts } from '../state/products';
import { useHistory } from 'react-router';

export default function EditProduct() {

    const [product, setProduct] = useState({});
    const [productForm, setProductForm] = useState({})

    const dispatch = useDispatch()
    const history = useHistory()

    const categories = useSelector(state => state.categories)

    const { id } = useParams();

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
    }, [])

    const handleDelete = () => {
        axios.delete(`/api/products/${id}`)
        .then(() => history.push('/admin/products'))
    }

    return (
        <div>
            {console.log('FORM', productForm)}
            <h1>Edit {product.nombre}</h1>

            <form id='addProduct' onSubmit={handleSubmit}>
                <label type="text" for='nombre'>Nombre:</label>
                <input onChange={handleChange} name='nombre' defaultValue={product.nombre}></input>

                <label type="text" for='precio'>Precio:</label>
                <input onChange={handleChange} name='precio' defaultValue={product.precio}></input>

                <label type="text" for='imagen'>URL Imagen:</label>
                <input onChange={handleChange} name='imagen' defaultValue={product.imagen}></input>

                <label for='descripcion'>Descripcion:</label>
                <input onChange={handleChange} type='text' name='descripcion' defaultValue={product.descripcion}></input>

                <label for='stock'>Stock:</label>
                <input onChange={handleChange} type="number" name='stock' defaultValue={product.stock}></input>

                <label for='categoria'>Categoria:</label>
                <select onChange={handleChange} name='CategoryId'>
                    <option>Seleccionar categoria</option>
                    {categories.map(categorie => {
                        return (
                            <option value={categorie.id}>{categorie.type}</option>
                        )
                    })}
                </select>
                <button type='submit'>Confirmar cambios</button>
            </form>
            <button onClick={handleDelete} type='button'>Eliminar producto</button>
        </div>
    )
}
