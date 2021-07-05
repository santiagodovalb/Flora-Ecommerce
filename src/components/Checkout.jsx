import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import '../styles/Checkout.css';
import axios from 'axios';

export default function Checkout() {

    const cart = useSelector(state => state.cart)
    const user = useSelector(state => state.user)
    const history = useHistory()

    const handleCancel = () => {
        history.push('/cart')
    }

    const handlePago = () => {
        axios.post('/api/shop/order')
        history.push('/user')
    }

    return (
        <div className='checkoutDiv'>
            <h1>Checkout</h1>
            <h2>Direccion: {user.direction}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Telefono: {user.phone}</h2>
            <Link to='/edit-user'>
            <h3>Edit info</h3>
            <hr/>
            </Link>
            <div className='checkoutProds'>
            {cart.map(product => {
                return (
                    <div className='eachProd'>
                    <img src={product.Product.imagen} alt='prodImage' />
                    <p>{product.cantidad}</p>
                    </div>
                )
            })}
            </div>
            <hr/>
            <div>
            <h1>Metodo de pago</h1>
            <select name='pago'>
                <option value='credito'>Tarjeta de credito</option>
                <option value='debito'>Tarjeta de debito</option>
                <option value='mercadopago'>Mercadopago</option>
                <option value='efectivo'>Efectivo</option>
            </select>
            </div>
            <div>
            <h1>Metodo de envio</h1>
            <select name='envio'>
                <option value='credito'>Mercado Envios</option>
                <option value='debito'>Cadeteria</option>
                <option value='mercadopago'>Retiro en local</option>
            </select>
            </div>
            <div>
            <button onClick={handlePago}type='button'>Confirmar pago</button>
            <button onClick={handleCancel} type='button'>Cancelar</button>
            </div>
        </div>
    )
}
