import "bootstrap/dist/css/bootstrap.min.css";
import { TbClipboardData } from "react-icons/tb";
function Home() {
  return (
    <div className="container-fluid home-container">
      <div className="row home-grid d-flex flex-column-reverse flex-md-row">
        <div className="col-12 col-md-6 home-img"></div>
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start home-text">
          <span className="home-bar"></span>
          <h1 className="into-text">
            Mobile
            <br /> development
          </h1>
          <button className="border-0 rounded-3 py-3 px-5 home-button">
            ABOUT ME
          </button>
        </div>
      </div>
      <div className="row g-4 cards-grid">
        <div className="col-12 col-md-6 col-lg-3 ">
          <div className="card border-0 rounded-0 p-3 d-flex flex-column align-items-center home-card">
            <span className="rounded-circle mb-4 p-1 icon-container">
              <TbClipboardData className="icons-home" />
            </span>
            <h4 className="home-card-title">YOO MN</h4>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 ">
          <div className="card border-0 rounded-0 p-3 d-flex flex-column align-items-center home-card">
            <span className="rounded-circle mb-4 p-1 icon-container">
              <TbClipboardData className="icons-home" />
            </span>
            <h4 className="home-card-title">YOO MN</h4>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 ">
          <div className="card border-0 rounded-0 p-3 d-flex flex-column align-items-center home-card">
            <span className="rounded-circle mb-4 p-1 icon-container">
              <TbClipboardData className="icons-home" />
            </span>
            <h4 className="home-card-title">YOO MN</h4>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 ">
          <div className="card border-0 rounded-0 p-3 d-flex flex-column align-items-center home-card">
            <span className="rounded-circle mb-4 p-1 icon-container">
              <TbClipboardData className="icons-home" />
            </span>
            <h4 className="home-card-title">YOO MN</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
