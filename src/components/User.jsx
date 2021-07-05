import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import '../styles/User.css'

export default function User() {

    const user = useSelector(state => state.user)
    const history = useHistory()

    const handleClick = () => {
        history.push('/edit-user')
    }

    return (
        <div className='userWrapper'>
            {console.log(user)}
            <h1>{user.nick}</h1>
            <h2>Direccion: {user.direction}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Telefono: {user.phone}</h2>
            <button type='button' onClick={handleClick}>Editar info</button>
        </div>
    )
}
