import Button from "@restart/ui/esm/Button"
import { useState } from "react"
import { Link } from "react-router-dom"


export const ItemCount = ({stock , agregar}) => {

    const [boton,setBoton]= useState(1)

    const [finalizarCompra, setFinalizarCompra] = useState(false)

    const [botonActivo, setBotonActivo] = useState(false)


        
        const bajarNumero = () => {
            setBoton ( boton -1)
        }
    
        const subirNumero = () => {
            if(boton  >= stock) {
               setBotonActivo(true)
              }
              else 
            setBoton(boton +1 )
        }
        
        
        const agregarCarrito = ()=>{
            agregar(boton)
            setFinalizarCompra(true)
            }
    
  
    
    return (
        
        <div className="contador">
            <div className="contador__botones">
                <button  onClick={bajarNumero} disabled={boton === 1 ? true : false}>-</button> {boton} <button onClick={subirNumero} disabled={boton === stock ? true : false}>+</button>
            </div>

            <div className="contador__carrito">
                { finalizarCompra ?
                
                 <Link className="seleccionar__link " to='/cart'>
                 Pasar al carrito
                 </Link>
               
                :
                <button onClick={agregarCarrito}>Agregar al carrito</button>

            }     
            </div>

        </div>
    )
            

}