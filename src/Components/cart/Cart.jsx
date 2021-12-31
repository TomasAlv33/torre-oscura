
import { Link } from "react-router-dom"
import {useState} from 'react'
import { useCartContext } from "./CartContext"
import firebase from "firebase"
import getFirestore from "../../services/getFirestore"

export const Cart = () => {

    const {cartList, precioTotal,removerLibro, borrarTodo,compraRealizada} = useCartContext()
  
    const [idOrder, setIdOrder] = useState('')

    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        email: ''
    })
 
 
     const generarOrden = (e) =>{
        e.preventDefault()        
        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date());    
        orden.buyer = formData
        orden.items = cartList.map(cartItem => {
            const id = cartItem.detalle.id;
            const nombre = cartItem.detalle.name;
            const cantidad = cartItem.cantidad;
            const precio = cartItem.detalle.price * cartItem.cantidad;
            
            return {id, nombre, cantidad, precio}   
        })
        
        const dbQuery = getFirestore()

        dbQuery.collection('orders').add(orden)
        .then(resp => setIdOrder(resp.id))
        .catch(err=> console.log(err))
        .finally(()=> setFormData({
            name:'',
            phone:'',
            email: ''
        }))
    
    }
 
    const handleChange=(e)=>{
       setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }


    return(
        <>
        {
            cartList.length === 0  ?
            <div>
                <h1>No has seleccionado ningun libro!</h1>
                Hace click 
                <Link to="/" className="seleccionar__link">
                    acá
                </Link>
                y selecciona uno !
            </div>
            : 
        <div className="itemCart__container">
        {cartList.map ((libro) =>(
            <div stylekey={libro.id} className="item__cart">
               <img src={libro.detalle.urlimg} alt="Imagen del libro a comprar" /> 
                <h2>{libro.detalle.name}</h2>
                <i> (cantidad:{libro.cantidad})</i>
                <h3> - ${libro.detalle.price * libro.cantidad} </h3>
                <button onClick={()=>removerLibro(libro.detalle.id)}>Remover </button>
            </div>
          
        )) }
              <button onClick={borrarTodo} className="itemDelete__all">Limpiar el carrito</button>
              
              <h3>Completa el formulario para realizar el pedido : </h3>
              <form className="cart__form"
                onSubmit={generarOrden} 
                onChange={handleChange} 
            >
                <input type='text' name='name' placeholder='Nombre y apellido' value={formData.name}/>
                <input type='text' name='phone'placeholder='Celular' value={formData.phone}/>
                <input type='email' name='email'placeholder='Email' value={formData.email}/>
                <button >Realizar pedido</button>
            </form>
            <section>
                        {idOrder !==''&& <label className="orderCompra">
                             Gracias por la compra ! El id de su orden es :  <b>{idOrder}</b>
                             </label>}
                    </section>
        </div>
        }
        

        </>
    )
}