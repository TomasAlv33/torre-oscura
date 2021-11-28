import { useState } from "react"
import { Link } from "react-router-dom"


export const ItemCount = ({stock , agregar}) => {

    const [boton,setBoton]= useState(0)

    const [finalizarCompra, setFinalizarCompra] = useState(false)

    const [botonActivo, setBotonActivo] = useState(false)


      /*  console.log('soy stock ' ,stock)  */
        
        const bajarNumero = () => {
            setBoton ( boton -1)
        }
    
        const subirNumero = () => {
            if(boton  >= stock) {
               setBotonActivo(true)
                /*   alert(`No hay mas stock, podes comprar hasta ${stock} libros`) */
              }
              else 
            setBoton(boton +1 )
        }
        
        
        const agregarCarrito = ()=>{
            /* console.log({boton}) */
            agregar(boton)
            setFinalizarCompra(true)
            }
    
  
    
    return (
        
        <div className="contador">
            <div className="contador__botones">
                <button  onClick={bajarNumero} disabled={boton === 0 ? true : false}>-</button> {boton} <button onClick={subirNumero} disabled={boton === stock ? true : false}>+</button>
            </div>

            <div className="contador__carrito">
                { finalizarCompra ?
                 <Link to='/cart'>
                 Pasar al carrito
                 </Link>
               
                :
                <button onClick={agregarCarrito}>Agregar al carrito</button>

            }     
            </div>

        </div>
    )
            

}