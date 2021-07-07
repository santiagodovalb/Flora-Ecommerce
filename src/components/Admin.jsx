import React from 'react'
import { useHistory } from 'react-router'

export default function Admin() {

    const history = useHistory()

    const handleProducts = () => {
        history.push('/admin/products')
    }
    const handleCats = () => {
        history.push('/admin/categories')
    }

    return (
        <div>
            <h1>Admin page</h1>
            <button onClick={handleProducts}type='button'>Gestionar productos</button>
            <button onClick={handleCats} type='button'>Gestionar categorias</button>
        </div>
    )
}
