import { Link } from "react-router-dom"

export default function LibrosList({ libros }) {



    return (
        < >
            <div className="container__list">
            <div className="titulo">
                <h2>¡Bienvenidos a Torre Oscura!</h2>
                <h3>La tienda de libros de Stephen King</h3>
            </div>
            <div className="container__item">

                {libros.map(libro =>
                    <div className="item" key={libro.id} >
                        <h2 className="libro__name">
                            {libro.name}
                        </h2>
                        <div className="libro__img">
                            <img src={libro.urlimg} alt="Libro en venta" />
                        </div>
                        <h3>
                            ${libro.price}
                        </h3>
                        <Link to={`/item/${libro.id}`}> <button>Ver detalle</button> </Link>
                    </div>
                )}
            </div>
            </div>
        </>
    )
}