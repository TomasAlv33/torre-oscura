import { useState } from "react"



export const ItemListContainer = ({ greeting }) => {
    return (
        <h2> {greeting} </h2>
    )
}


export const ItemCount = () => {
    
    const [boton,setBoton]= useState(1)
    
    const bajarNumero = () => {
        setBoton ( boton -1)
    }

    const subirNumero = () => {
        setBoton ( boton +1)
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


