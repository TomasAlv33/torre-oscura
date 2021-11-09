import {createContext, useState, useContext} from 'react'

const CartContext = createContext()


export const CartContextProvider = () => {

    const [cartList,setCartList] =  useState([])


} 