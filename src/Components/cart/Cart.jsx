
import { useCartContext } from "./CartContext"


export const Cart = () => {

    const {cartList, pushCart} = useCartContext()

    return(

        <>

        {cartList.map ((libro) =>(
            <div key={libro.id}>
                <h2>{libro.name}</h2>
                <h3>{libro.price}</h3>
            </div>
        )) }

        </>

    )

   
}