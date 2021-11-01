import React, { useEffect, useState } from "react"
import { getDetailLibro } from "../item/Item.js"
import { ItemDetail } from "../item/ItemDetail.jsx"
import { useParams } from 'react-router-dom'



export function ItemDetailContainer ()  {

    const {id} = useParams()

    const [libro , setLibro] = useState ([])

    useEffect(() => {
        getDetailLibro
        .then(res=>{
            setLibro(res)
        })
        .catch (err => console.log(err))
    } , [id])

    console.log(libro)

    return (
           <>
              <ItemDetail libro={libro}/>
          </>
    )
}