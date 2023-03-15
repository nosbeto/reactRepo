import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function DeveloperExp() {
  return (
    <Container className="d-flex justify-content-around p-3">
      <Card border="dark" style={{ width: "30rem" }}>
        <Card.Header as="h5">Developer's Experience</Card.Header>
        <Card.Body>
          <Card.Title>Summary</Card.Title>
          <Card.Text>
            Completed a six month full-stack web development bootcamp by UNCC,
            where I gained hands-on experience with the following development
            tools:
          </Card.Text>
          <ListGroup style={{ width: "18rem" }}>
            <ListGroup.Item>Vanila Js</ListGroup.Item>
            <ListGroup.Item>Node Js</ListGroup.Item>
            <ListGroup.Item>SQL/Sequalize</ListGroup.Item>
            <ListGroup.Item>Boootstrap/ReactBootstrap</ListGroup.Item>
            <ListGroup.Item>React</ListGroup.Item>
            <ListGroup.Item>Express Js</ListGroup.Item>
            <ListGroup.Item>Graph QL</ListGroup.Item>
            <ListGroup.Item>API Development</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}
