import React, { useEffect, useState } from "react"
import { getListaLibros } from "../item/Item.js"
import { ItemDetail } from "../item/ItemDetail.jsx"
import { useParams } from 'react-router-dom'



export function ItemDetailContainer ()  {
    

    const {id} = useParams()
 
 
   const [detalle , setDetalle] = useState ([])

   useEffect(() => {
      getListaLibros
      .then((res ) =>{
         const detalleLibro=res.filter(detalles => detalles.id == id)
          setDetalle(detalleLibro[0])})
      }, [])
      /* console.log( 'soy detalle' , detalle) */
    return (
           <>
              <ItemDetail detalle={detalle}/>
          </>
    )
}