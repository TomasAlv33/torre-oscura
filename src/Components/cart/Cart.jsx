
import { Link } from "react-router-dom"
import { ItemCount } from "../item/ItemCount"
import LibrosList from "../item/ItemList"
import { useCartContext } from "./CartContext"


export const Cart = () => {

    const {cartList, pushCart,removerLibro, borrarTodo} = useCartContext()

    /* const totalPrice = cartList.reduce((price , cantidad ) =>price + libro.cantidad * libro.detalle.price,0) */
   
    return(
        <>
        {
            cartList.length === 0  ?
            <div>
                <h1>No has seleccionado ningun libro</h1>
                <Link to="/">
                    Anda y selecciona alguno ! 
                </Link>
            </div>
            :
        <div className="itemCart__container">
        {cartList.map ((libro) =>(
            <div stylekey={libro.id} className="item__cart">
                <h2>{libro.detalle.name}</h2>
                <i> (cantidad:{libro.cantidad})</i>
                <h3> - ${libro.detalle.price * libro.cantidad}</h3>
                <button onClick={removerLibro}>Bajar </button>
            </div>
          
        )) }
              <button onClick={borrarTodo} className="itemDelete__all">Limpiar el carrito</button>
        </div>
        }

        </>
    )
}