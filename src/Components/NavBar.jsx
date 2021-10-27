import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { CartWidget } from "./CartWidget"

const NavBar = () => {
  
  
  return (
    <div>
      <Navbar  className=" d-flex justify-content-end" bg="success" expand="lg" >
        <Navbar.Brand href="#home" className="h1"><strong>Torre Oscura </strong> - Tienda de libros</Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="h4">Home</Nav.Link>
              <NavDropdown title="Libros" id="basic-nav-dropdown" className="h4 ">
                <NavDropdown.Item href="#action/3.1">Stephen King</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Richard Bachman</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" className="h4">FaQ</Nav.Link>

            </Nav>

          </Navbar.Collapse>
          <a className="navbar__cart">
            <CartWidget />
          </a>
        </Container>

      </Navbar>
    </div>
  )
}

export default NavBar