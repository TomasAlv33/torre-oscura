import LibrosList from "../item/ItemList"
import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import getFirestore from "../../services/getFirestore"


export const ItemListContainer = ({ greeting }) => {

    const { categoria } = useParams()
    
    const [libros, setLibros] = useState([])

    useEffect(() => {

        const db = getFirestore()
        if (categoria) {
            const dbQuery=db.collection('libros').where('categoria' , '==' , categoria ).get()
            dbQuery
            .then(resp => setLibros(resp.docs.map(libro=>({categoria:libro.categoria,...libro.data()}))))
        } else {
            const dbQuery=db.collection('libros').get()
            dbQuery
            .then(resp => setLibros(resp.docs.map(libro=>({categoria:libro.categoria,...libro.data()}))))
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

    },[categoria])
    return (
        <div>
            <h2> {greeting} </h2>
            <LibrosList libros={libros} />
        </div>
    )
}





