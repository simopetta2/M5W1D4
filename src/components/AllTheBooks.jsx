import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import HorrorBook from '../books/horror.json'
import Details from './Details.jsx'
import SingleBook from './singleBook.jsx';
function AllTheBooks() {
    
    return (
        
        <Container>
            <Row className='g-4'>
                {HorrorBook.map((book) => {
                    return (
                       <SingleBook key={book.asin} book={book}/>
                    )
                })}
            </Row>
        </Container>
    )
}

export default AllTheBooks;