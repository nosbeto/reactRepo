import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function ContactMe() {
  return (
    <Container className="d-flex justify-content-around p-3">
      <Card border="dark" style={{ width: "25rem" }}>
        <Card.Header as="h5">Contact Me</Card.Header>
        <Card.Img variant="top" src="./img/profile/BetosProfile.png" />
        <Card.Body>
          <ListGroup className="list-group-flush" style={{ width: "20rem" }}>
            <ListGroup.Item>Alberto De Armas</ListGroup.Item>
            <ListGroup.Item>ajdearmas13@gmail.com</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="https://www.linkedin.com/in/dearmasalberto/">LinkedIn</Card.Link>
            <Card.Link href="https://github.com/nosbeto">Github repo</Card.Link>
          </Card.Body>
        </Card.Body>
      </Card>
    </Container>
  );
}
