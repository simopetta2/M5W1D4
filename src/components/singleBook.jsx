

import { Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router';
import CommentArea from './commentArea';


function SingleBook({ book, setSelectedBook, selectedBook }) {

    return (
        <Col sm={6} md={4} lg={4} className="mb-4">

            <Card
                className={`book-card h-100 shadow-lg ${selectedBook?.asin === book.asin ? "border border-primary border-3" : ""}`}
                onClick={() => setSelectedBook(book)}
                style={{ cursor: "pointer" }}
            >
                <Card.Img variant="top" src={book.img} style={{ height: '250px' }} />
                <Card.Body className="p-3 d-flex flex-column">
                    <Card.Title className="small fw-bold text-truncate">{book.title}</Card.Title>
                    <Card.Text className="text-muted small">€{book.price}</Card.Text>
                    <Button size="sm" variant="outline-primary" className="mt-auto rounded-pill">Acquista</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleBook;