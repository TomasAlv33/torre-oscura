import LibrosList from "../item/ItemList"
import React, { useEffect, useState } from "react"
import { getListaLibros } from "../item/Item"
import { useParams } from 'react-router-dom'


export const ItemListContainer = ({ greeting }) => {

    const { categoria } = useParams()

    const [libros, setLibros] = useState([])

    useEffect(() => {
        if (categoria) {
            getListaLibros
                .then(res => {
                    setLibros(res.filter(cat => cat.escritor === categoria))
                })

            }
        else {
            getListaLibros
                .then(res => {
                    setLibros(res)
                })
        }


    },[categoria])
    return (
        <div>
            <h2> {greeting} </h2>
            <LibrosList libros={libros} />
        </div>
    )
}





