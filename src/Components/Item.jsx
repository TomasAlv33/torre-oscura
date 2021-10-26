 import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Imagenes from "../Assets/Imagenes"


  
    export const Libros =[
         {
         id: 1 , name:'El Resplandor', img: src={Imagenes.img1} , price: '$1500',
        },
        {
            id: 2, name:'El Resplandor', img:'public\el-resplandor.jpg' , price: '$1500'
        },
        {
            id: 3, name:'El Resplandor', img:'public\el-resplandor.jpg' , price: '$1500'
        },
         ] ;

 
    


/* export const ListaLibros = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(libros)
    }, 10000)
}) */






/* const Item = (libros) => {
    
    return(
        <div >
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={libros.foto}/>
            <Card.Body>
                <Card.Title>{libros.name}</Card.Title>
                <Card.Text>
                    {libros.precio}
                </Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
            </Card>
        </div>
    )

} */


/* export default Item  */
 



