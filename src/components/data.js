import "bootstrap/dist/css/bootstrap.min.css";

function Data() {
  return (
    <div className="container-fluid py-5 data-container">
      <div className="row data-grid">
        <div className="col-12 col-lg-6 p-0">
          <div className="p-0 pe-lg-4 container-fluid">
            <div className="row gy-4 gx-0 gx-md-4 pb-5">
              <div className="col-12 col-md-6">
                <div className="card-body d-flex flex-column justify-content-center align-items-center p-3">
                  <span className="value">127</span>
                  <p className="data-card-title">CUPS OF COFFEE</p>
                  <p className="text-center">
                    Sample text. Click to select the text box. Click again or
                    double click to start editing the text.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card-body d-flex flex-column justify-content-center align-items-center p-3">
                  <span className="value">127</span>
                  <p className="data-card-title">CUPS OF COFFEE</p>
                  <p className="text-center">
                    Sample text. Click to select the text box. Click again or
                    double click to start editing the text.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card-body d-flex flex-column justify-content-center align-items-center p-3">
                  <span className="value">127</span>
                  <p className="data-card-title">CUPS OF COFFEE</p>
                  <p className="text-center">
                    Sample text. Click to select the text box. Click again or
                    double click to start editing the text.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card-body d-flex flex-column justify-content-center align-items-center p-3">
                  <span className="value">127</span>
                  <p className="data-card-title">CUPS OF COFFEE</p>
                  <p className="text-center">
                    Sample text. Click to select the text box. Click again or
                    double click to start editing the text.
                  </p>
                </div>
              </div>
            </div>
            <div className="row ">
              {/* <div className=""> */}
              <h2 className="data-header">
                Nam ultrices ultrices nec tortor pulvinar esteras loremips est
              </h2>
              <p>
                Etiam erat velit scelerisque in dictum non consectetur. Nisl
                purus in mollis nunc sed id semper. Cras fermentum odio eu
                feugiat pretium nibh ipsum. Tristique et netus et malesuada
                fames. Sem fringilla ut morbi tincidunt augue interdum velit.
              </p>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 p-3 data-grid-two">
          <h6>Name</h6>
          <p className="pb-3">Fred Morrison</p>
          <h6>Name</h6>
          <p className="pb-3">Fred Morrison</p>
          <h6>Name</h6>
          <p className="pb-3">Fred Morrison</p>
          <h6>Name</h6>
          <p className="pb-3">Fred Morrison</p>
          <h6>Name</h6>
          <p className="pb-3">Fred Morrison</p>
        </div>
      </div>
    </div>
  );
}

export default Data;
