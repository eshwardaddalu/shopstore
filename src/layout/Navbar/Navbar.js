import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from '@mui/material/Badge';
import './NavBar.css';

const NavBar = () => {
    return (
        <><Navbar expand="lg" className="bg-body-tertiary py-3 first-nav" style={{ borderBottom: '1px solid #ddd' }}>
            <Container className=''>
                <Navbar id="responsive-navbar-nav" className='p-0'>
                    <Nav className="logo">
                        <span className='labelText'>Shop<span className='secondLabelText'>Store</span></span>
                    </Nav>
                    <Nav className="shop-hyperlinks">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#men">Men</Nav.Link>
                        <Nav.Link href="#women">Women</Nav.Link>
                        <Nav.Link href="#babycollection">Baby Collection</Nav.Link>
                        <NavDropdown title="Pages" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='font-24'><i class="fas fa-search"></i></Nav.Link>
                        <Nav.Link className='font-24'><i class="fas fa-user"></i></Nav.Link>
                        <Nav.Link className='font-24'>
                            <Badge badgeContent={1} color="error">
                                <i class="fas fa-cart-plus"></i>
                            </Badge></Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        </Navbar>
        <Navbar expand="lg" className="bg-body-tertiary p-0 shop-nav" style={{ borderBottom: '1px solid #ddd' }}>
            <Container className=''>
                <Navbar id="responsive-navbar-nav" className='p-0'>
                    <Nav className="shopNow-hyperlinks">
                        <span>Sale upto 50% Biggest Discounts. Hurry, Limited Period Offer</span>
                        <Nav.Link href="#shop" className='shopNow'>Shop Now</Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        </Navbar>

        </>
    );
};

export default NavBar;