import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <div className="container-fluid about-container ">
      <h2 className="py-5 text-center about-title">Software Development</h2>
      <div className="row g-3 d-flex about-cards-grid ">
        <div className="col-12 col-md-6 col-lg-4 align-self-start">
          <div className="d-flex align-items-center p-4 flex-column about-card">
            <img
              src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/17319cbd48ef526f86145883/yyyy.jpg?version="
              alt=""
              className="about-img"
            ></img>
            <h4 className="py-3 card-title">App Development</h4>
            <p>
              Etiam erat velit scelerisque in dictum non consectetur. Nisl purus
              in mollis nunc sed id semper. Cras fermentum odio eu feugiat
              pretium nibh ipsum. Tristique senectus.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 align-self-center">
          <div className="d-flex align-items-center p-4 flex-column about-card">
            <img
              src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/c9d97524f40f5dc7b655fec5/cxcc.jpg?version="
              alt=""
              className="about-img"
            ></img>
            <h4 className="py-3 card-title">App Development</h4>
            <p>
              Etiam erat velit scelerisque in dictum non consectetur. Nisl purus
              in mollis nunc sed id semper. Cras fermentum odio eu feugiat
              pretium nibh ipsum. Tristique senectus.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4 align-self-end">
          <div className="d-flex align-items-center p-4 flex-column about-card">
            <img
              src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/5afd912c145c565aa771662b/41b33903-3e8e-4cdd-bded-87e6350ce68a.jpg?version="
              alt=""
              className="about-img"
            ></img>
            <h4 className="py-3 card-title">App Development</h4>
            <p>
              Etiam erat velit scelerisque in dictum non consectetur. Nisl purus
              in mollis nunc sed id semper. Cras fermentum odio eu feugiat
              pretium nibh ipsum. Tristique senectus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
