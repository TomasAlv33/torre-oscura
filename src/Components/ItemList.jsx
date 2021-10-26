import React, { useEffect, useState } from "react"
import { getListaLibros } from "./Item.js"
import { ItemCount } from "./ItemListContainer"
import logo from "../elResplandor.jpg"

  export default function LibrosList() {

    const [libros, setLibros] = useState([])

    useEffect(() => {
        getListaLibros
        .then( res =>   {
            setLibros(res)  })
        },[])
    console.log(libros, "Soy libros")
    
    return (
        <>
            { libros.map(libro =>  
                <div key={libro.id} >
                    <h1>
                        {libro.name}
                    </h1>
                    <img src={logo} alt="plandor" />
                    <h3>
                        {libro.price}
                    </h3>
                <ItemCount />
                </div> 
            )}
        </>
    )
} 