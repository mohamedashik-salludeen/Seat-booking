import "bootstrap/dist/css/bootstrap.min.css";
import applogo from "./images/applogo.png";
import HomeBannerImg from "./images/HomeBannerImg.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div className="mybus-container">
      <div className="mybus-header">
        <div className="mybus-logo">
          <img src={applogo} alt="applogo" />
        </div>
        <div className="mybus-tagline">
          <span>Bring your loved ones closer to your dreams</span>
        </div>
      </div>

      <div className="homebanner">
        <img src={HomeBannerImg} alt="applogo" />
        <div className="selectortrip">
          <div className="row m-0">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="From City"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="To City"
              />
            </div>
            <div className="col">
              <DatePicker
                portalId="root-portal-toDate"
                dateFormat="dd/MM/yyyy"
                placeholderText={"Date"}
                className="form-control"
              />
            </div>
            <div className="col">
              <button className="btn btn-danger ">search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
