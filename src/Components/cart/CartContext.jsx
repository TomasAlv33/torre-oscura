import {createContext, useState, useContext} from 'react'
const CartContext = createContext()

export const useCartContext = ()=> useContext(CartContext) 


export const CartContextProvider = ({children}) => { 

    const [cartList,setCartList] =  useState([])


    function pushCart(libros) { 
      const productExist = cartList.find((item) => item.detalle.id === libros.detalle.id);
      if (productExist) {
         productExist.cantidad += libros.cantidad
          
      } else {
          setCartList([...cartList, libros])
      }
    }

    

    const mostrarListado =()=>{
        console.log(cartList)
    }

    const removerLibro = (id) => {
        setCartList( cartList.filter(libro => libro.detalle.id !== id) )
    }
 
    const precioTotal = () => {
        cartList.reduce((acum, libro) => acum + (libro.cantidad * libro.price) , 0)
    }

    const borrarTodo =() => {
        setCartList([])
    }

    const compraRealizada = (generarOrden) =>{
        setCartList([])
        alert('Gracias por tu compra !, tu orden de la misma es')
    }

    return (
        <CartContext.Provider value={{
            cartList,
            mostrarListado,
            pushCart,
            borrarTodo , 
            removerLibro,
            precioTotal,
            compraRealizada,
        }}>
            {children}
        </CartContext.Provider>
    )

} 