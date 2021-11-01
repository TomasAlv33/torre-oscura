/* import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap" */
import { CartWidget } from "./cart/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
  
  
  return (
    <>    
      <div>
       <Link to='/listaDeLibros'> <h1><strong>Torre Oscura -</strong> Tienda de Libros</h1></Link>
      </div>
      <div className="menu">
        <Link to='/listaDeLibros'>Home</Link>
        <Link to='/listaDeLibros'>Libros</Link>
        <Link to='/cart'>Carrito</Link>
      </div>
      <CartWidget/>
    </>
  )
}

export default NavBar