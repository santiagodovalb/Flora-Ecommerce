import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

export default function Admin() {

    const user = useSelector(state => state.user)

    const history = useHistory()

    const handleProducts = () => {
        history.push('/admin/products')
    }
    const handleCats = () => {
        history.push('/admin/categories')
    }

    const handleUsers = () => {
        history.push('/admin/users')
    }

    const handleOrders = () => {
        console.log('ENTRA')
        history.push('/admin/orders')
    }

    return (
        <div>
            <h1>Admin page</h1>
            <button onClick={handleProducts}type='button'>Gestionar productos</button>
            <button onClick={handleCats} type='button'>Gestionar categorias</button>
            <button onClick={handleOrders} type='button'>Gestionar ordenes</button>
            {user.rolId === 3 && <button onClick={handleUsers} type='button'>Gestionar usuarios</button>}
        </div>
    )
}
