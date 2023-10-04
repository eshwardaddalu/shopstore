// import Carousel from "nuka-carousel";
import { useState } from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, colors } from '@mui/material';
import menslogo from './../assets/images/mens.jpg';
import whitebg from './../assets/images/white-bg.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CarouselScreen = () => {
    return (
        <section class='carousel-section'>
            <div class='container-fluid p-0'>
                <div className="featured-row">
                    <div className="carousel-block">
                        <Carousel IndicatorIcon={<img src={menslogo} />}>
                            <Container fluid>
                                <Row>
                                    <Col className="col-spaninfo">
                                        <div>
                                            <h2 style={{ color: 'red' }}>Fashion Sale</h2>
                                            <p className="label-text">
                                                Fashion is about something that comes from within you. Make a statement with our fashion that reflects your inner beauty. 
                                                get fashionable</p>

                                            <Button className="CheckButton">
                                                Shop Now
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col>
                                        <img src={whitebg} className="bg-image" width="100%" />
                                    </Col>
                                </Row>
                            </Container>

                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarouselScreen;