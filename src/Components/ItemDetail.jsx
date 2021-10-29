import {useState , useEffect} from 'react'
import { getDetailLibro} from './Item.js'
import logo from "../elResplandor.jpg"
import { ItemCount } from './ItemCount.jsx'


export function ItemDetail()  {

    const [libro , setLibro] = useState ({})

    useEffect(() => {
        getDetailLibro
        .then(res=>{
            setLibro(res)
        })
        .catch (err => console.log(err))
    } , [])

    console.log(libro)

    return(
        <>
           <div className="details">
            <h1 > {libro.name}</h1>
            <div className="logoLibros">
                        <img src={logo} alt="Libro en venta" />
                    </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, beatae?</p>
            <h3> {libro.price}</h3>
            <ItemCount/>
            </div>
            



        </>
    )



}