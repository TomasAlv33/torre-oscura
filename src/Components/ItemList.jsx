import React, { useEffect, useState } from "react"
import { getListaLibros } from "./Item.js"
import { ItemCount } from "./ItemCount"
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
        < >
        <div className="container__item">
            { libros.map(libro =>  
                <div className="item" key={libro.id} >
                    <h1>
                        {libro.name}
                    </h1>
                    <div className="logoLibros">
                        <img src={logo} alt="Libro en venta" />
                    </div>
                    <h3>
                        {libro.price}
                    </h3>
                <ItemCount />
                </div> 
            )}
        </div>
        </>    
    )
} 