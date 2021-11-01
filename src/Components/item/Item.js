

    const Libros = [
        {
            id: 1 , name:'El Resplandor', img: "../assets/elResplandor.jpg" , price: '$1500',
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


export const getListaLibros = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve(Libros)
    }, 2000)
}) 

const Libro = [
    {
        id: 1 , name:'El Resplandor', img: "../assets/elResplandor.jpg", description:'Aca iria la descripcion del libro' , price: '$1500',
    },
    {
        id: 2, name:'El Resplandor', img: "../assets/img/ChivasRegal.png", description:'Aca iria la descripcion del libro' , price: '$1500'
    },
    {
        id: 3, name:'El Resplandor', img:'../assets/img/elResplandor.jpg', description:'Aca iria la descripcion del libro' , price: '$1500'
    },
    {
        id: 4, name:'El Resplandor', img:'../assets/img/elResplandor.jpg', description:'Aca iria la descripcion del libro' , price: '$1500'
    },
    {
        id: 5, name:'El Resplandor', img:'../assets/img/elResplandor.jpg', description:'Aca iria la descripcion del libro' , price: '$1500'
    },
    {
        id: 6, name:'El Resplandor', img:'../assets/img/elResplandor.jpg', description:'Aca iria la descripcion del libro' , price: '$1500'
    },
    {
        id: 7, name:'El Resplandor', img:'../assets/img/elResplandor.jpg', description:'Aca iria la descripcion del libro' , price: '$1500'
    },
    {
        id: 8, name:'El Resplandor', img:'../assets/img/elResplandor.jpg', description:'Aca iria la descripcion del libro' , price: '$1500'
    },
    {
        id: 9, name:'El Resplandor', img:'../assets/img/elResplandor.jpg', description:'Aca iria la descripcion del libro' , price: '$1500'
    },
] ;

/* const Libro = {id:1 , name:'El Resplandor', img: "../assets/elResplandor.jpg" , price: '$1500'} */

 
export const getDetailLibro = new Promise ((resolve , reject ) =>{
    setTimeout(()=>{
        resolve(Libro)
    } , 2000)
})


