import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { setCategories } from '../state/categories'

export default function AdminCategories() {

    const [addForm, setAddForm] = useState({})
    const [editForm, setEditForm] = useState({})

    const dispatch = useDispatch()

    const categories = useSelector(state => state.categories)

    const history = useHistory()

    const handleAddChange = (e) => {
        setAddForm({type: e.target.value})
    }

    const handleEditChange = (e) => {
        setEditForm({type: e.target.value})
    }

    const toggleInput = () => {
        document.getElementById('categorie').style.display = document.getElementById('categorie').style.display === 'none' ? 'block' : 'none'
    }

    const toggleCats = () => {
        document.getElementById('adminCategories').style.display = document.getElementById('adminCategories').style.display === 'none' ? 'block' : 'none'
    }

    const handleAdd = () => {
        axios.post('/api/category/add', addForm)
        .then(() => {
            dispatch(setCategories())
            history.push('/admin')})
    }

    const handleDelete = (id) => {
        console.log('ENTRA')
        axios.delete(`/api/category/${id}`)
        .then(() => {
            dispatch(setCategories())
            history.push('/admin')})
    }

    const handleEdit = (e, id) => {
        console.log('ENTRA')
        e.preventDefault()
        axios.put(`/api/category/${id}`, editForm)
        .then(() => {
            dispatch(setCategories())
            history.push('/admin')})
    }

    return (
        <div>
            <button onClick={toggleInput} type='button'>Add categorie</button>
            <form onSubmit={handleAdd} id='categorie' style={{display:'none'}}>
            <input onChange={handleAddChange} type='text'></input>
            <button type='submit'>Add</button>
            </form>
            <button onClick={toggleCats} type='button'>Manage categories</button>
            <div style={{display: 'none'}} id='adminCategories'>
                {categories.map(categorie => {
                    return (
                    <div>
                    <h2>{categorie.type}</h2>
                    <button  type='button'>Edit Categorie</button>
                    <form onSubmit={(e) => handleEdit(e, categorie.id)}>
                    <input onChange={handleEditChange} id='editCat' type='text' defaultValue={categorie.type}></input>
                    <button type='submit'>Confirm</button>
                    </form>
                    <button onClick={() => handleDelete(categorie.id)} type='button'>Delete Categorie</button>
                    </div>
                )})}
            </div>
        </div>
    )
}
