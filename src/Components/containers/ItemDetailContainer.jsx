import React, { useEffect, useState } from "react"
import { getDetailLibro } from "../item/Item.js"
import { ItemDetail } from "../item/ItemDetail.jsx"
import { useParams } from 'react-router-dom'



export function ItemDetailContainer ()  {

  

    return (
           <>
              <ItemDetail />
          </>
    )
}