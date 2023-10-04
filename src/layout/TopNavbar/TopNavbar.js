import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './TopNavbar.css';

const TopNavbar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary p-0 first-nav" style={{borderBottom: '1px solid #ddd'}}>
            <Container className=''>
                <Navbar id="responsive-navbar-nav" className='p-0'>
                    <Nav className="me-auto">
                        <Nav.Link href="#features">About Us</Nav.Link>
                        <Nav.Link href="#pricing">Privacy</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                        <Nav.Link href="#career">Careers</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">My Wishlist</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">Track your order</Nav.Link>
                        <Nav.Link><i class="fab fa-facebook"></i></Nav.Link>
                        <Nav.Link><i class="fab fa-instagram"></i></Nav.Link>
                        <Nav.Link><i class="fab fa-twitter"></i></Nav.Link>

                        <Nav.Link><i class="fab fa-linkedin-in"></i></Nav.Link>
                        <Nav.Link><i class="fab fa-youtube"></i></Nav.Link>

                    </Nav>
                </Navbar>
            </Container>
        </Navbar>
    );
};

export default TopNavbar;