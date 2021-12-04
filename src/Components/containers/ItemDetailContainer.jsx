import React, { useEffect, useState } from "react"
import { ItemDetail } from "../item/ItemDetail.jsx"
import { useParams } from 'react-router-dom'
import getFirestore from "../../services/getFirestore.js"



export function ItemDetailContainer() {


  const { id } = useParams()


  const [detalle, setDetalle] = useState({})


  useEffect(() => {

    const db = getFirestore()
    const dbQuery = db.collection('libros').get()
    dbQuery.then(resp => {
      let items = resp.docs.map(libro => ({ id: libro.id, ...libro.data() }))
      let item = items.find(item => item.id == id)
      setDetalle(item)
    })



  }, [id])
  return (
    <>
      <ItemDetail detalle={detalle} />
    </>
  )
}