
import { useCartContext } from "./CartContext"


export const Cart = () => {

    const {cartList, pushCart} = useCartContext()
    console.log(Cart, 'soy cart')

    return(

        <>
        {cartList.map ((libro) =>(
            <div stylekey={libro.id}>
                <h2>{libro.detalle.name}</h2>
                <h3>{libro.detalle.price}</h3>
                <h3>{libro.detalle.cantidad}</h3>
            </div>
        )) }

        </>

    )

   
}