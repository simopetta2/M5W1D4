import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HorrorBook from '../books/horror.json'
function Details() {
    return (
        <Container id='details'>
            <Row>
        <div class="row g-5 align-items-center">
            <div class="col-md-6">
                <div class="p-3 border rounded shadow-sm bg-white text-center">
                    <img src={HorrorBook.img} alt="${product.name}" class="img-fluid rounded shadow"/>
                </div>
            </div>

            <div class="col-md-6">
                <h6 class="text-uppercase text-muted mb-1">${product.brand}</h6>
                <h1 class="display-4 fw-bold mb-3">${product.name}</h1>

                <div class="d-flex align-items-center mb-4">
                    <span class="fs-2 fw-bold text-secondary me-3">${product.price} €</span>
                    <span class="badge bg-success">Disponibile</span>
                </div>

                <div class="mb-4 pt-3 border-top">
                    <h5 class="fw-bold">Descrizione</h5>
                    <p class="text-secondary">${product.description}</p>
                </div>

                <div class="d-grid gap-2 d-md-flex mt-5">

                    <a href="index.html" class="btn btn-secondary btn-lg px-4 rounded-pill">
                        Torna allo shop
                    </a>
                </div>
            </div>
        </div>
        </Row>
        </Container>
    )
} export default Details