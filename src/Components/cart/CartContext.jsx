import { faGalacticSenate } from '@fortawesome/free-brands-svg-icons'
import {createContext, useState, useContext} from 'react'
import LibrosList from '../item/ItemList'

const CartContext = createContext()

export const useCartContext = ()=> useContext(CartContext) 


export const CartContextProvider = ({children}) => { 

    const [cartList,setCartList] =  useState([])


    function pushCart(libros) { 
      const productExist = cartList.find((item) => item.detalle.id == libros.detalle.id);
      if (productExist) {
         productExist.cantidad += libros.cantidad
          
      } else {
          setCartList([... cartList, libros])
      }
    }

    

    const mostrarListado =()=>{
        console.log(cartList)
    }

    const removerLibro = (libro) => {
        setCartList(libro.cantidad -1 )
    }
 
    const borrarTodo =() => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            mostrarListado,
            pushCart,
            borrarTodo , 
            removerLibro
        }}>
            {children}
        </CartContext.Provider>
    )

} 