import { useState } from "react"
import { Link } from "react-router-dom"


export const ItemCount = ({stock , agregar}) => {


    const [boton,setBoton]= useState(1)

    const [finalizarCompra, setFinalizarCompra] = useState(false)

      /*  console.log('soy stock ' ,stock)  */

    const bajarNumero = () => {
        if (boton>1){
        setBoton ( boton -1)
     }
        else {
            setBoton(boton +0)
        }
    }

    const subirNumero = () => {
        setBoton(boton +1 )
    }

    const agregarCarrito = ()=>{
        /* console.log({boton}) */
        if(boton > stock) {
            alert(`No hay mas stock, podes comprar hasta ${stock} libros`)
        }
        else 
        agregar(boton)
        {setFinalizarCompra(true)}
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