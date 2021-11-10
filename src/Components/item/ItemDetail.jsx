import { ItemCount } from './ItemCount.jsx'
import { Link } from 'react-router-dom'
import { useState } from "react"
import { useCartContext } from '../cart/CartContext.jsx'


export function ItemDetail ( {detalle} ) {

    const [count, setCount] = useState(0)

    const {cartList, pushCart} = useCartContext()

    const agregar =(cantidad)=>{
        setCount(cantidad)
        pushCart({detalle, cantidad })
    }

    console.log(cartList)

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
                    <ItemCount  agregar={agregar} stock={detalle.stock}/>
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