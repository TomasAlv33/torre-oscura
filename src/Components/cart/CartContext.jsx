import {createContext, useState, useContext} from 'react'

const CartContext = createContext()

export const useCartContext = ()=> useContext(CartContext) 


export const CartContextProvider = ({children}) => { 

    const [cartList,setCartList] =  useState([])


    function pushCart(libros) { 
       if(cartList.includes(libros.id)){
        setCartList(
            cartList 
        )
       } else {
        setCartList([
            ...cartList,
            libros
        ])
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