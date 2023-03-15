import Container from "react-bootstrap/Container";
import ContactMe from './ContactMe';
import FormEmail from "./FormEmail";

const ContactMeWrapper = () => {
  return (
    <Container>
        <ContactMe />
        <FormEmail />
    </Container>
  );
}

export default ContactMeWrapper