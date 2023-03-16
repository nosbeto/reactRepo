import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ModalEmail from "./ModalEmail"


export default function SendMeEmail() {
  return (
    <Container className="d-flex justify-content-around p-3">
      <Card border="dark" style={{ width: "25rem" }}>
      <Form>
        <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="m-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Send me a message</Form.Label>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>
        <ModalEmail/>
      </Form>
      </Card>
    </Container>
  );
}
