import LibrosList from "../item/ItemList"
import React, { useEffect, useState } from "react"
import { getListaLibros } from "../item/Item"
import { useParams } from 'react-router-dom'
import getFirestore from "../../services/getFirestore"


export const ItemListContainer = ({ greeting }) => {

    const { id } = useParams()

    const [libros, setLibros] = useState([])

    useEffect(() => {

        const db = getFirestore()
        if (id) {
            const dbQuery=db.collection('libros').where('categoria' , '==' , id ).get()
            dbQuery
            .then(resp => setLibros(resp.docs.map(libro=>({id:libro.id,...libro.data()}))))
        } else {
            const dbQuery=db.collection('items').get()
            dbQuery
            .then(resp => setLibros(resp.docs.map(libro=>({id:libro.id,...libro.data()}))))
        }

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

    },[id])
    return (
        <div>
            <h2> {greeting} </h2>
            <LibrosList libros={libros} />
        </div>
    )
}





