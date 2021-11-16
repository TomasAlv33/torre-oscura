import React, { useEffect, useState } from "react"
import { getListaLibros } from "../item/Item.js"
import { ItemDetail } from "../item/ItemDetail.jsx"
import { useParams } from 'react-router-dom'
import getFirestore from "../../services/getFirestore.js"



export function ItemDetailContainer ()  {
    

    const {id} = useParams()
 
 
   const [detalle , setDetalle] = useState ([])

   useEffect(() => {

    const db = getFirestore()
    const dbQuery = db.collection('libros') . doc(id).get()
    dbQuery
    .then(resp => setDetalle({id: resp.id , ...resp.data(id) }))

    /*   getListaLibros
      .then((res ) =>{
         const detalleLibro=res.filter(detalles => detalles.id == id)
          setDetalle(detalleLibro[0])}) */
      }, [])
    return (
           <>
              <ItemDetail detalle={detalle}/>
          </>
    )
}