import {Libros} from "./Item";


  export const LibrosList = () => {

    return (
           { Libros.map ((libro) =>  <div key={Libros.id} >

                <h1>
                    {Libros.name}
                </h1>

                <div>
                    <img src={Libros.img} alt="" />
                </div>

                <h3>
                    {Libros.price}
                </h3>

            </div> 
            )}
    
           )
} 