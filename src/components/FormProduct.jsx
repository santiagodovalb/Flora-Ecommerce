import React from 'react'
import { useHistory } from 'react-router';

export default function FormProduct({product,handleChange,handleSubmit,categories}) {

    if(product === undefined) product =''

    return (
        <div>
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
        </div>
    )
}
