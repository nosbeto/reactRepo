import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function ProfileSummary() {
  return (
    <Container className="d-flex justify-content-around">
      <Card style={{ width: "30rem" }}>
        <Card.Header as="h5">Alberto De Armas Profile's Summary</Card.Header>
        <Card.Body>
          <Card.Title>Experience</Card.Title>
          <Card.Text>
            Implementation Consultant at Featurespace. I bring nearly 8 years of
            industry experience managing integration projects for financial
            institutions. I hold a graduate certificate from UNCC’s Data Science
            and Business Analytics program.
          </Card.Text>
          <Card.Text as="h6">Employers</Card.Text>
          <ListGroup style={{ width: "12rem" }}>
            <ListGroup.Item>Citco</ListGroup.Item>
            <ListGroup.Item>Wells Fargo</ListGroup.Item>
            <ListGroup.Item>EY</ListGroup.Item>
            <ListGroup.Item>Featurespace</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}
