import React from "react";
import {
  Button,
  Card,
  Container,
  ListGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import myImage from "../assets/images/myImage.jpg";
const Home = () => {
  const imageUrl = process.env.PUBLIC_URL + "../../public/Images/images.jpg";
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">C R U D</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">
              <i className="bi bi-house-door-fill"></i> Home
            </Nav.Link>
            <Nav.Link href="/dashboard">
              <i className="bi bi-speedometer2"></i> Dashboard
            </Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <div className="mt-3 row">
        <div className="col-md-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={myImage} alt="Card image cap" style={{height: '156', width: '286'}} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <br />

          <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          {[
            "Primary",
            "Secondary",
            "Success",
            "Danger",
            "Warning",
            "Info",
            "Light",
            "Dark",
          ].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
