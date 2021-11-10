/* import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap" */
import { CartWidget } from "./cart/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {


  return (
    <>
      <div className="navBar">
        <div>
          <Link to='/'> <h1><strong>Torre Oscura -</strong> Tienda de Libros</h1></Link>
        </div>
        <div className="menu">
          <Link to='/escritor/escritor'>Home</Link>
          <Link to='/escritor/king'>King</Link>
          <Link to='/escritor/bachman'>Bachman</Link>
          
        </div>
        <div>
        <Link to='/cart'><CartWidget /></Link>
        </div>

      </div>

    </>
  )
}
export default NavBar