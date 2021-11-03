import React, { useEffect, useState } from "react"
import { getDetailLibro } from "../item/Item.js"
import { ItemDetail } from "../item/ItemDetail.jsx"
import { useParams } from 'react-router-dom'



export function ItemDetailContainer ()  {

    const {id} = useParams()

    const [detalle , setDetalle] = useState ([])


    useEffect(() => {
        getDetailLibro
        .then( res =>   {
            setDetalle(res)  })
        },[])
        

    console.log( 'soy libro' , detalle)

    return (
           <>
              <ItemDetail detalle={detalle}/>
          </>
    )
}