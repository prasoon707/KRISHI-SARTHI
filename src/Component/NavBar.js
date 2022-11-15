import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar(){
  return(
    <Navbar variant="dark"  bg="success" expand="lg"  >
    <Container>
      <Navbar.Brand href="#home">KRISHI-SARTHI</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Dashboard</Nav.Link>
          <Nav.Link href="#link">Booking</Nav.Link>
          <Nav.Link href="#link">Help </Nav.Link>
          
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
export default NavBar;