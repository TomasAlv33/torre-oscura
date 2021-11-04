import logo from "../../elResplandor.jpg"
import { ItemCount } from './ItemCount.jsx'
import { Link } from 'react-router-dom'
import { ItemDetailContainer } from "../containers/ItemDetailContainer"
import React, { useEffect, useState } from "react"
import {getListaLibros } from "../item/Item.js"
import { useParams } from "react-router-dom"


export function ItemDetail()  {

    const {id} = useParams()
    

     const [detalle , setDetalle] = useState ([])

    useEffect(() => {
       (getListaLibros)
       .then((res ) =>{
           const detalleLibro = res.filter(detalles => detalles.id === id)
           setDetalle(detalleLibro)})
       }, [id])

    console.log( 'soy libroi' , detalle)

    return (
        <>
             <div className="details">
                <h1 > {detalle.name}</h1>
                <div >
                    <img src={detalle.img} alt="Libro en venta" />
                </div>
                <div></div>
                <p>{detalle.description}</p>
                <h3> {detalle.price}</h3>
                <ItemCount />
                <Link to='/'> <button>Volver</button></Link>

            </div>

        </>
    )



}