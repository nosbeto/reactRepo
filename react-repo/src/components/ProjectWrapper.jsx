import Project from "./Project";
import Projects from "../seeds/projects.json"
import Container from "react-bootstrap/Container";

const ProjectWrapper = () => {
  return (
    <Container>
      <Project projects={Projects}/>
    </Container>
  );
};

export default ProjectWrapper;
