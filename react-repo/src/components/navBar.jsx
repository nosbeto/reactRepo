import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ isActive, handlePageChange }) => {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Alberto De Armas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={() => handlePageChange("Home")}>
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => handlePageChange("Project")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                onClick={() => handlePageChange("ContactMe")}
              >
                Contact Me
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/dearmasalberto/"
              >
                LinkedIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavBar;
