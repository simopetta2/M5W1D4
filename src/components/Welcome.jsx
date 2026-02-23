import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import image from '../assets/libri-26345.jpg'
import logo from '../assets/logo.svg'
import './Welcome.css'
function Welcome() {
    const [show, setShow] = useState(true);

    return (
        <>
            <Alert show={show} variant="primary">
                <Alert.Heading>Benvenuto</Alert.Heading>
                <p>
                    "Benvenuto su EpiBooks 📚 Esplora i nostri scaffali digitali e lasciati ispirare dalla tua prossima grande avventura. Approfitta dello sconto del 10% sul tuo primo ordine!"
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-secondary">
                        Chiudi
                    </Button>
                </div>
            </Alert>
            {!show && <Button className='m-4' variant='outline-secondary' onClick={() => setShow(true)}>Apri Notifica</Button>}
            <div className='d-flex align-items-center justify-content-between'>
                <img className='icon-logo-img' src={image} alt="Logo" />
                <img className='logo-img-epibooks' src={logo} alt="" />
            </div>
        </>
    );
}

export default Welcome;