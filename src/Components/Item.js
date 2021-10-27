

    const Libros = [
        {
            id: 1 , name:'El Resplandor', img: "../assets/img/elResplandor.jpg" , price: '$1500',
        },
        {
            id: 2, name:'El Resplandor', img: "../assets/img/ChivasRegal.png" , price: '$1500'
        },
        {
            id: 3, name:'El Resplandor', img:'../assets/img/elResplandor.jpg' , price: '$1500'
        },
        {
            id: 4, name:'El Resplandor', img:'../assets/img/elResplandor.jpg' , price: '$1500'
        },
        {
            id: 5, name:'El Resplandor', img:'../assets/img/elResplandor.jpg' , price: '$1500'
        },
        {
            id: 6, name:'El Resplandor', img:'../assets/img/elResplandor.jpg' , price: '$1500'
        },
        {
            id: 7, name:'El Resplandor', img:'../assets/img/elResplandor.jpg' , price: '$1500'
        },
        {
            id: 8, name:'El Resplandor', img:'../assets/img/elResplandor.jpg' , price: '$1500'
        },
        {
            id: 9, name:'El Resplandor', img:'../assets/img/elResplandor.jpg' , price: '$1500'
        },
    ] ;


export const getListaLibros = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(Libros)
    }, 2000)
}) 






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
 



