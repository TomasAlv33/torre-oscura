import logo from "../../elResplandor.jpg"
import { ItemCount } from './ItemCount.jsx'
import { Link, } from 'react-router-dom'
import { ItemDetailContainer } from "../containers/ItemDetailContainer"
import { useParams } from "react-router-dom"


export function ItemDetail({detalle})  {

    const {id} = useParams()

    const [detalle , setDetalle] = useState ([])


    useEffect(() => {
        getDetailLibro
        .then( res =>   {
            setDetalle(res)  })
        },[])
        

    console.log( 'soy libro' , detalle)

    return (
        <>
             <div className="details">
                <h1 > {detalle.name}</h1>
                <div >
                    <img src={detalle.img} alt="Libro en venta" />
                </div>
                <div></div>
                <p>{detalle.description}</p>
                <h3> {detalle.price}</h3>
                <ItemCount />
                <Link to='/'> <button>Volver</button></Link>

            </div>

        </>
    )



}