import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import footer from './Myfooter.jsx'
function Mynav() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#contatti">About</Nav.Link>
            <NavDropdown title="Browse" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">History</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Romance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Scifi</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynav;