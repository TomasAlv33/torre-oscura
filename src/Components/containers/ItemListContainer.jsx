import LibrosList from "../item/ItemList"
import React, { useEffect, useState } from "react"
import { getListaLibros } from "../item/Item"
import { useParams } from 'react-router-dom'
import getFirestore from "../../services/getFirestore"


export const ItemListContainer = ({ greeting }) => {

    const { categoria } = useParams()

    const [libros, setLibros] = useState([])

    useEffect(() => {

         const db = getFirestore()
        const dbQuery = db.collection('libros').where('categoria', '==', 'king').get()
        dbQuery
        .then(resp => setLibros(resp.docs.map(libro => ({id:libro.id , ...libro.data()})))) 


  /*       if (categoria) {
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
  */

    },[categoria])
    return (
        <div>
            <h2> {greeting} </h2>
            <LibrosList libros={libros} />
        </div>
    )
}





