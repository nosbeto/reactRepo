import Project from "./Project";

import Projects from "../seeds/projects.json"

const ProjectWrapper = () => {
  console.log(Projects)
  return (
    <div>
      <Project projects={Projects}/>
    </div>
  );
};

export default ProjectWrapper;
