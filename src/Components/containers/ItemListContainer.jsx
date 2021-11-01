import LibrosList from "../item/ItemList"
import React, { useEffect, useState } from "react"
import { getListaLibros } from "../item/Item"




export const ItemListContainer = ({ greeting }) => {

    const [libros, setLibros] = useState([])

    useEffect(() => {
        getListaLibros
        .then( res =>   {
            setLibros(res)  })
        },[])
        
    console.log(libros, "Soy libros")
    return (
        <div>
            <h2> {greeting} </h2>
            <LibrosList libros={libros}/>
        </div>
    )
}





