import LibrosList from "../item/ItemList"
import React, { useEffect, useState } from "react"
import { getListaLibros } from "../item/Item"
import { useParams } from 'react-router-dom'


export const ItemListContainer = ({greeting}) => {

    const {id} = useParams()


    const [libros, setLibros] = useState([])

    useEffect(() => {
            getListaLibros
            .then( res =>   {
                setLibros(res.filter(cat => cat.categoria == id ))  })
            },[])
        
      
        
    return (
        <div>
            <h2> {greeting} </h2>
            <LibrosList libros={libros}/>
        </div>
    )
}





