import {createContext, useState, useContext} from 'react'
import LibrosList from '../item/ItemList'

const CartContext = createContext()

export const useCartContext = ()=> useContext(CartContext) 


export const CartContextProvider = ({children}) => { 

    const [cartList,setCartList] =  useState([])


    function pushCart(libros) { 
      const productExist = cartList.find((item) => item.id == libros.id);
      if (productExist) {
         productExist.cantidad += libros.cantidad
          
      } else {
          setCartList([... cartList, libros])
      }
    }
    const mostrarListado =()=>{
        console.log(cartList)
    }


    return (
        <CartContext.Provider value={{
            cartList,
            mostrarListado,
            pushCart
        }}>
            {children}
        </CartContext.Provider>
    )

} 