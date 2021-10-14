import { Navbar,Container,Nav,NavDropdown } from "react-bootstrap"

const NavBar = () => {
    return (
        <div>
            <Navbar bg="success" expand="lg">
  <Container>
    <Navbar.Brand href="#home" className="h1"><strong>Torre Oscura </strong> - Tienda de libros</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home" className="h3">Home</Nav.Link>
        <NavDropdown title="Libros" id="basic-nav-dropdown" className="h3">
          <NavDropdown.Item href="#action/3.1">Stephen King</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Richard Bachman</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link" className="h3">FaQ</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavBar