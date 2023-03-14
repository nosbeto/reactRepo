const Project = ({projects=[]}) => {
  const style = '"width: 18rem"'
  return (
    <div className="container pb-3">
        {projects.map(Project=>(
      <div className="card" style={{style}}>
        <img src={Project.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
          {Project.title}
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>      ))}
    </div>
  );
};

export default Project;
