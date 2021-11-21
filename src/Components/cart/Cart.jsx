
import { Link } from "react-router-dom"
import {useState} from 'react'
import { useCartContext } from "./CartContext"
import firebase from "firebase"
import getFirestore from "../../services/getFirestore"

export const Cart = () => {

    const {cartList, precioTotal,removerLibro, borrarTodo} = useCartContext()

    /* const totalPrice = cartList.reduce((price , cantidad ) =>price + libro.cantidad * libro.detalle.price,0) */
   
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
         orden.total = precioTotal(); 
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.nombre;
            const precio = cartItem.precio * cartItem.cantidad;
            
            return {id, nombre, precio}   
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
        
      
        const itemsToUpdate = dbQuery.collection('libros').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.id)
        )
    
        const batch = dbQuery.batch();
        
    
        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).cantidad
                })
            })
    
            batch.commit().then(res =>{
                console.log('resultado batch:', res)
            })
        })
    
        
    }
 
    const handleChange=(e)=>{
       setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }
 console.log(formData)


    return(
        <>
        {
            cartList.length === 0  ?
            <div>
                <h1>No has seleccionado ningun libro</h1>
                <Link to="/">
                    Anda y selecciona alguno ! 
                </Link>
            </div>
            :
        <div className="itemCart__container">
        {cartList.map ((libro) =>(
            <div stylekey={libro.id} className="item__cart">
                <h2>{libro.detalle.name}</h2>
                <i> (cantidad:{libro.cantidad})</i>
                <h3> - ${libro.detalle.price * libro.cantidad}</h3>
                <button onClick={removerLibro}>Remover </button>
            </div>
          
        )) }
              <button onClick={borrarTodo} className="itemDelete__all">Limpiar el carrito</button>
              <form 
                onSubmit={generarOrden} 
                onChange={handleChange} 
            >
                <input type='text' name='name' placeholder='name' value={formData.name}/>
                <input type='text' name='phone'placeholder='tel' value={formData.phone}/>
                <input type='email' name='email'placeholder='email' value={formData.email}/>
                <button>Enviar</button>
            </form>
        </div>
        }
        

        </>
    )
}