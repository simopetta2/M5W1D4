import books from '../books/horror.json'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


function Mynav({setFilteredBooks}) {
const filterBooks = (event) =>{
const bookArray = books.filter((book) => book.title.toLowerCase().includes(event.target.value.toLowerCase().trim()))
setFilteredBooks(bookArray)
}
  

  return (
    <Navbar expand="lg" className="bg-white border-bottom shadow-sm py-3">
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
        <Col xs="auto">
          <Form.Control
          
            type="text"
            placeholder="Search 🔍"
            className=" mr-sm-2"
          
            onChange={filterBooks}
          />
        </Col>
      </Container>
    </Navbar>
  );
}

export default Mynav;