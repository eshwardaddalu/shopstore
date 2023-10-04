import Card from 'react-bootstrap/Card';
import menslogo from './../assets/images/mens.jpg'
import womenslogo from './../assets/images/womens.jpeg';
import kidslogo from './../assets/images/kids.jpeg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
const InfoCards = () => {
    return (
        <>
            <div className="cards-list d-flex">
                <Card className="bg-dark text-white">
                    <Card.Img src={menslogo} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Men's Fashion</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white">
                    <Card.Img src={womenslogo} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Women's Fashion</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white">
                    <Card.Img src={kidslogo} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Baby Fashion</Card.Title>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <Container>
                <Row>
                    <Col className="">
                        <label>Trending this Week</label>
                    </Col>
                    <Col>
                    <Nav className="">
                        <Nav.Link href="#men">Men</Nav.Link>
                        <Nav.Link href="#women">Women</Nav.Link>
                        <Nav.Link href="#home">Baby</Nav.Link>
                        <Nav.Link href="#home">Fashion</Nav.Link>
                    </Nav>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default InfoCards;