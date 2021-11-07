import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { getListaLibros } from "./Item"
import { useParams } from "react-router"

export const ItemCount = () => {

    const {id} = useParams()
    const [boton,setBoton]= useState(1)
    const [finalizarCompra, setFinalizarCompre] = useState(false)
     const [stock,setStock]= useState()

    useEffect(() => {
        getListaLibros
        .then((res) =>{
            const buscarStock=res.filter(stock => stock.id == id)
            setStock(buscarStock[3])
        })
    },[]) 

   

    const bajarNumero = () => {
        if (boton>1){
        setBoton ( boton -1)
     }
        else {
            setBoton(boton +0)
        }
    }

    const subirNumero = () => {
        if (boton>=1){
        setBoton ( boton +1)
        }
        else setBoton(boton +0 )
    }

    const agregarCarrito = ()=>{
        console.log({boton})
        if (boton > stock ){ alert('No hay mas stock !') }
        else {setFinalizarCompre(true)}
        console.log('soy stock ', stock)
    }

    
    return (
        <div className="contador">
            <div className="contador__botones">
                <button onClick={bajarNumero}>-</button> {boton} <button onClick={subirNumero}>+</button>
            </div>

            <div className="contador__carrito">
                { finalizarCompra ?
                 <Link to='/cart'>
                 <button onClick={agregarCarrito}>Pasar al carrito</button>
                 </Link>
               
                :
                <button onClick={agregarCarrito}>Agregar al carrito</button>

            }     
            </div>

        </div>

    )


}