import { useState } from "react"


export const ItemCount = () => {

    const [boton,setBoton]= useState(1)
    
    const bajarNumero = () => {
        if (boton>=1){
        setBoton ( boton -1)
     }
        else {
            setBoton(boton +0)
        }
    }

    const subirNumero = () => {
        if (boton<7){
        setBoton ( boton +1)
        }
        else setBoton(boton+0 , alert('No hay mas stock !'))
    }

    const agregarCarrito = ()=>{
        console.log({boton})
    }

    
   
    return (
        <div className="contador">
            <div className="contador__botones">
                <button onClick={bajarNumero}>-</button> {boton} <button onClick={subirNumero}>+</button>
            </div>

            <div className="contador__carrito">
                <button onClick={agregarCarrito}>Agregar al carrito</button>
            </div>

        </div>

    )


}