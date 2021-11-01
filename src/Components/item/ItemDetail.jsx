import logo from "../../elResplandor.jpg"
import { ItemCount } from './ItemCount.jsx'
import { Link, } from 'react-router-dom'


export function ItemDetail({libro})  {



    return (
        <>
            <div className="details">
                <h1 > {libro.name}</h1>
                <div className="logoLibros">
                    <img src={logo} alt="Libro en venta" />
                </div>
                <div></div>
                <p>{libro.description}</p>
                <h3> {libro.price}</h3>
                <ItemCount />
                <Link to='/listaDeLibros'> <button>Volver</button></Link>

            </div>




        </>
    )



}