import React from "react";
import {
    Button, Container, Navbar, Nav, Form,
    FormControl, Carousel, NavDropdown, Row, Col, Image, Card, CardGroup
} from "react-bootstrap"
import { Link } from "react-router-dom";
import "../css/home.css";

class Home extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="light" variant="light" fixed="top">
                    <Navbar.Brand>
                        LOGO
                    </Navbar.Brand>
                    <Nav className="mr-auto">

                        <Nav.Link>
                            <Link to="/home">Home</Link>
                        </Nav.Link>
                        <NavDropdown title="Products" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="/product">    Industrial Pcs</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/product">PLC System</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/product">I/O System</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>
                            <Link to="/about">About Us</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact">Contact</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1780776b4cd%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1780776b4cd%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%2320232a%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.0703125%22%20y%3D%22218.75%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1780776b4cc%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1780776b4cc%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22294.53125%22%20y%3D%22218.75%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1780776b4cd%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1780776b4cd%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23282c34%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22256.9609375%22%20y%3D%22218.75%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Container>
                    <div className="slogna-text">
                        <h1>Looking for a quality and affordable service?</h1>
                    </div>


                    <Row className="margin-top-30">
                        <Col md={4}>

                            <Image src="http://www.geometrixar.com/images/about.jpg" rounded className="img-1" />
                        </Col>

                        <Col md={6}>
                            <h4>About Us</h4>
                            <p>
                                Our towering success in the industry within a short span of time is based on our encompassing range of Robotic solutions for Robotic Laser Cutting,
                                Robotic Mig and Spot Welding,Robotic Material Handling, Robotic Machine Tending and many innovative robotic applications as per customers requirements. Geometrix Automation & Robotic Solutions Apart from Providing the turnkey solutions for industries we are also providing engineering services like Mechanical Design, Simulation, Robot Programming, PLC Programming and Integration Services Onsite and Offsite.All our Solutions and Services are Conforming to international quality parameters, our hard-wearing and high performing Deliverables are acknowledged for their economical and energy efficient performance in diverse industrial applications.
                            </p>
                                <Link to="/about">Read More</Link>

                        </Col>

                    </Row>
                    <div className="margin-top-30">
                        <Row>
                            <Col md={4}>
                                <hr />
                            </Col>
                            <Col md={4}>
                                <h3>INDUSTRIES WE SERVED</h3>
                            </Col>
                            <Col md={4}>
                                <hr />
                            </Col>
                        </Row>
                    </div>
                    <div className="margin-top-30">
                        <CardGroup>
                            <Card className="margin-10">
                                <Card.Img variant="top" src="http://www.geometrixar.com/images/about.jpg" />

                                <Card.Footer>
                                    <Card.Title className="text-center">AUTOMOTIVE</Card.Title>
                                </Card.Footer>
                            </Card>
                            <Card className="margin-10">
                                <Card.Img variant="top" src="http://www.geometrixar.com/images/about.jpg" />

                                <Card.Footer>
                                    <Card.Title className="text-center">HEAVY INDUSTRIES</Card.Title>
                                </Card.Footer>
                            </Card>
                            <Card className="margin-10">
                                <Card.Img variant="top" src="http://www.geometrixar.com/images/about.jpg" />
                                <Card.Footer>
                                    <Card.Title className="text-center"> AGRICULTURE</Card.Title>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </div>

                    <div className="margin-top-30">
                        <CardGroup>
                            <Card className="margin-10 text-center">
                                <Card.Title>2020</Card.Title>

                                <Card.Footer>
                                    <Card.Title className="text-center">YEAR OF ESTABLISHMENT</Card.Title>
                                </Card.Footer>
                            </Card>
                            <Card className="margin-10 text-center">
                                <Card.Title>1000</Card.Title>

                                <Card.Footer>
                                    <Card.Title className="text-center">HAPPY CLIENTS</Card.Title>
                                </Card.Footer>
                            </Card>
                            <Card className="margin-10 text-center">
                                <Card.Title>3000</Card.Title>
                                <Card.Footer>
                                    <Card.Title className="text-center">PROJECTS DELIVERED</Card.Title>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </div>

                    <div className="margin-top-30">
                        <Row>
                            <Col md={4}>
                                <hr />
                            </Col>
                            <Col md={4}>
                                <h3>OUR PRODUCTS</h3>
                            </Col>
                            <Col md={4}>
                                <hr />
                            </Col>
                        </Row>
                    </div>
                    <div className="margin-top-30">
                        <CardGroup>
                            <Card className="margin-10">
                                <Card.Img variant="top" src="http://www.geometrixar.com/images/product/4.jpg" />

                                <Card.Footer>
                                    <Card.Title className="text-center"> SPECIAL PURPOSE MACHINES </Card.Title>
                                </Card.Footer>
                            </Card>
                            <Card className="margin-10">
                                <Card.Img variant="top" src="http://www.geometrixar.com/images/product/7.jpg" />

                                <Card.Footer>
                                    <Card.Title className="text-center">ROBOTIC TURN KEY AUTOMATION </Card.Title>
                                </Card.Footer>
                            </Card>
                            <Card className="margin-10">
                                <Card.Img variant="top" src="http://www.geometrixar.com/images/product/8.jpg" />
                                <Card.Footer>
                                    <Card.Title className="text-center"> ROBOT SYSTEM INTEGRATION</Card.Title>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </div>


                    <div className="margin-top-30">
                        <Row>
                            <Col md={4}>
                                <hr />
                            </Col>
                            <Col md={4}>
                                <h3>OUR VALUABLE CLIENTS</h3>
                            </Col>
                            <Col md={4}>
                                <hr />
                            </Col>
                        </Row>
                    </div>
                    <div className="margin-top-30">
                        <CardGroup>
                            <Card className="margin-10">
                                <Card.Img variant="top" src="http://www.geometrixar.com/images/client-logo/5.jpg" />
                            </Card>
                            <Card className="margin-10">
                                <Card.Img variant="top" src="http://www.geometrixar.com/images/client-logo/6.jpg" />
                            </Card>
                            <Card className="margin-10">
                                <Card.Img variant="top" src="http://www.geometrixar.com/images/client-logo/7.jpg" />
                            </Card>
                        </CardGroup>
                    </div>
                </Container>

                <div className="margin-top-30" style={{ background: "black", color: "white" }}>
                    <Container>
                        <Row>
                            <Col md={3}>
                                <h6 className="margin-top-10">
                                    FOR ENQUIREY
                            </h6>
                                <div>
                                    <Form>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="email" placeholder="Enter Name" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                    </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Message" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
                                    </Button>
                                    </Form>
                                </div>
                            </Col>

                            <Col md={4}>
                                <h6 className="margin-top-10">
                                    CONTACT
                            </h6>
                                <p>
                                    Address:- Factory - 53/1, Nigdi - Chakan Road, Near Talwade Circle,
                                    Talwade, Tal. Haveli, Dist. Pune, Maharashtra, India - 411062
                            </p>
                                <p>
                                    Mobile :-
                            <br />
                            +91 9921001880
                            <br />
                            +91 9921001881
                            </p>
                                <p>
                                    Email:-
                                <br />
                                myinfo@gmail.com
                            </p>
                            </Col>

                            <Col md={5}>
                                <h6 className="margin-top-10">
                                    LOCATION MAP
                                </h6>
                                <div>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.92836565562!2d73.7929269405248!3d18.52476632650221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1615096060797!5m2!1sen!2sin" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default Home;