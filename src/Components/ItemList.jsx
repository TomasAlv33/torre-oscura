import {Libros} from "./Item"


 export const LibrosList = () => {

    return (
            Libros.map ((Libro) =>  <div key={Libro.id} >

                <div>
                    {Libro.name}
                </div>

                <div>
                    <img src="{Libros.foto}" alt="" />
                </div>

                <div>
                    {Libro.precio}
                </div>

            </div> 
            )
     
    )
}