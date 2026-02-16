import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import HorrorBook from '../books/horror.json'
function AllTheBooks() {
    return (
        <Container>
            <Row className='g-4'>
                {HorrorBook.map((book) => {
                    return (
                        <Col xs={12} md={4} lg={3}>
                            <Card className='h-100'>
                                <Card.Img variant="top" src={book.img} />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="text-tr">{book.title}</Card.Title>
                                    <Card.Text className=''>
                                        Categoria: {book.category} <br />
                                        <strong>Price: {book.price}€</strong>
                                    </Card.Text>
                                    <Button variant="primary" className="mt-auto">Dettagli</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default AllTheBooks;