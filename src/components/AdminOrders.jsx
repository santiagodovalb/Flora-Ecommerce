import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAllOrders } from '../state/allOrders'
import OrderHistory from './OrderHistory'
import Admin from './Admin'

export default function AdminOrders() {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.allOrders)

    useEffect(() => {
        dispatch(setAllOrders())
    }, [dispatch])

    return (
        <div>
            <Admin/>
            <h1>Manage orders</h1>
            {console.log(orders)}
            <OrderHistory orders={orders} />
        </div>
    )
}
