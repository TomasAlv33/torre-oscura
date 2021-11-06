import { ItemCount } from './ItemCount.jsx'
import { Link } from 'react-router-dom'



export function ItemDetail ( {detalle}) {

    

 
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
                    <ItemCount/>
                <Link to='/' > <button className="button__back">Volver</button></Link>
                </div> 
                
            )}

            </div>

        </>
    )



}