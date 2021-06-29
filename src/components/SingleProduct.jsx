import React from 'react';
import { useParams } from 'react-router'

function SingleProduct() {

    const { id } = useParams()

    return(
        <div>
            <h1>Product {id}</h1>
            <ul>
                <li>Nombre:</li>
                <li>Precio:</li>
                <li>Descripcion:</li>
                <li>Imagen</li>
                <li>Stock:</li>
            </ul>
        </div>
    )
}

export default SingleProduct