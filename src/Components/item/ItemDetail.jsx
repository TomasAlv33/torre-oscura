import { ItemCount } from './ItemCount.jsx'
import { Link } from 'react-router-dom'
import { useState } from "react"
import { useEffect } from "react"


export function ItemDetail ( {detalle} ) {

    const [stock,setStock]= useState()
            
    useEffect(() =>{
        setStock(detalle.stock)
    },)
 
    console.log ('soy stock ' , stock)

    return (
        <>
             <div className="details">

             { detalle.map(detalle =>  
                <div className="itemDetail" key={detalle.id}>
                    <h2 className="libro__name">
                        {detalle.name}
                    </h2>
                    <div className="libro__img">
                        <img src={detalle.img} alt="Libro en venta" />
                    </div>
                    <div>
                        <p className="libro__description">
                            {detalle.description}
                        </p>
                    </div>
                    <h3>
                        {detalle.price}
                    </h3>
                    <ItemCount  stock={stock}/>
                    <div>
                        <p>
                            <i>Quedan {detalle.stock} libros en stock.</i>
                        </p>
                    </div>
                <Link to='/' > <button className="button__back">Volver</button></Link>
                </div> 
                
            )}

            </div>

        </>
    )



}