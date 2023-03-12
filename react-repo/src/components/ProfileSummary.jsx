export default function ProfileSummary() {
  return (
    <div className="container py-3">
      <div className="card">
        <h5 className="card-header">Alberto De Armas Profile's Summary</h5>
        <div className="card-body">
          <h5 className="card-title">Experience</h5>
          <p className="card-text">
            Implementation Consultant at Featurespace. I bring nearly 8 years of
            industry experience managing integration projects for financial
            institutions. I hold a graduate certificate from UNCC’s Data Science
            and Business Analytics program.
          </p>
          <h5 className="card-title">Employers</h5>
          <p className="card-text">
            <ul>
                <li>Citco</li>
                <li>Wells Fargo</li>
                <li>EY</li>
                <li>Featurespace (current)</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
