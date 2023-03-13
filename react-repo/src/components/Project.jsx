import Projects from "../seeds/projects.json"

const Project = (props) => {
  const style = '"width: 18rem"'
  return (
    <div className="container pb-3">
             {Projects.map(Project=>(
        <h1>{Project.title[0]}</h1>
      ))}
      <div className="card" style={{style}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
