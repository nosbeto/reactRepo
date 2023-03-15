import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Project = ({ projects = [] }) => {
  return (
    <Container>
      {projects.map((Project) => (
        <Container className="d-flex justify-content-around p-3">
          <Card border="dark" style={{ width: "30rem" }}>
            <Card.Img variant="top" src={Project.image} />
            <Card.Body>
              <Card.Title>{Project.title}</Card.Title>
              <Card.Text>{Project.description}
              </Card.Text>
              <Button href={Project.url}>Go to my repo</Button>
            </Card.Body>
          </Card>
        </Container>
      ))}
    </Container>
  );
};

export default Project;
