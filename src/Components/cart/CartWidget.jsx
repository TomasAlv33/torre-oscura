import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import { useCartContext } from "./CartContext"


export const CartWidget =() =>{

    const {cartList} = useCartContext()

    return(
    <>
    {
        cartList.length === 0 ? 
        <p></p>
        :
        < div className="cart__widget">
    <FontAwesomeIcon icon={faShoppingCart}/>
    <p>({cartList.length})</p>
    </div>
    }
    </>
    )
}


