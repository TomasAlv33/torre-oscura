import {Libros} from "./Item"


 export const LibrosList = () => {

    return (
           { Libros.map ((Libro) =>  <div key={Libros.id} >

                <h1>
                    {Libros.name}
                </h1>

                <div>
                    <img src={Libros.img} alt="" />
                </div>

                <h2>
                    {Libros.precio}
                </h2>

            </div> 
           )}
    
           )
}