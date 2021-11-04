import { ItemCount } from './ItemCount.jsx'
import { Link } from 'react-router-dom'
import { ItemDetailContainer } from "../containers/ItemDetailContainer"
import React, { useEffect, useState } from "react"
import {getListaLibros } from "../item/Item.js"
import { useParams } from "react-router-dom"


export function ItemDetail ( {detalle}) {

    

 
    return (
        <>
             <div className="details">

             { detalle.map(detalle =>  
                <div className="item"  >
                    <h2 className="libro__name">
                        {detalle.name}
                    </h2>
                    <div className="libro__img">
                        <img src={detalle.img} alt="Libro en venta" />
                    </div>
                    <h3>
                        {detalle.price}
                    </h3>
                   
                </div> 
            )}

            </div>

        </>
    )



}