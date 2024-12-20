import Header from "./Header";

// Icons
import dateIcon from "../assets/icons/date.svg";
import searchIcon from "../assets/icons/search.svg";

// Images
import layer1 from "../assets/img/layer1.png";
import layer2 from "../assets/img/layer2.png";
import layer3 from "../assets/img/layer3.png";

// conponents
import { Button } from "../components/Button";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <Header />

        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-5">
            <div className="container">
              {/* presentation start */}
              <h1 className="h1 display-5 fw-bold text-white text-center text-md-start mt-3 mt-md-5 mb-0">
                The Best Place To Find Your Dream House
              </h1>
              <p className="dispaly-6 small text-white text-center text-md-start p-2">
                A great platform to buy, sell, or even rent your properties
                without any commisions
              </p>
              {/* presentation end */}

              {/* company stats start*/}
              <div className="stat-info d-flex justify-content-between">
                <div className="info info-1 px-2 border-start border-2">
                  <h4 className="mb-0">1200+</h4>
                  <p className="small text-white mb-0">Rentals</p>
                </div>

                <div className="info info-2 px-2 border-start border-2">
                  <h4 className="mb-0">1000+</h4>
                  <p className="small text-white mb-0">Listed properties</p>
                </div>

                <div className="info info-2 px-2 border-start border-2">
                  <h4 className="mb-0">100+</h4>
                  <p className="small text-white mb-0">Awards</p>
                </div>
              </div>
              {/* company stats end */}
            </div>
          </div>

          <div className="col-md-6 d-none d-md-block">
            <div className="container img-con">
              <div className="img-con-box">
                <img className="layer1" src={layer1} alt="layer1" />
                <img className="layer2" src={layer2} alt="layer2" />
                <img className="layer3" src={layer3} alt="layer3" />
              </div>
            </div>
          </div>
        </div>

        {/* desktop-search-element start*/}
        <div className="ms-md-5 d-none d-md-block">
          <div className="d-flex  w-50 align-items-center justify-content-between bg-white ms-md-4 my-2 my-md-5 p-2">
            <div className="location border-start border-2 border-gray px-3">
              <small className="small">Location</small>
              <h5 className="h6">Yaba, Lagos</h5>
            </div>

            <div className="when border-start border-2 border-gray px-3">
              <small className="small">When</small>
              <h5 className="h6">
                Select Move-in Date
                <span className="ms-2">
                  <img src={dateIcon} alt="date_icon" />
                </span>
              </h5>
            </div>
            <div className="browse border-start border-2 border-gray px-3">
              <Button
                btnStyle={{
                  fontSize: "12px",
                  padding: "5px",
                  color: "#ffffff",
                  border: "none",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  backgroundColor: "#f56630",
                }}
              >
                Browse Propertie
              </Button>
            </div>
          </div>
        </div>
        {/* desktop-search-element end*/}

        {/* mobile-search-element start*/}
        <div className="d-md-none bg-white w-75 m-auto my-5 p-2">
          <div className="d-flex align-items-center justify-content-between">
            <div className="search">
              <input
                className="border-0"
                type="text"
                name="location"
                id="location"
                placeholder="Search location"
              />
            </div>

            <div className="browse px-3">
              <Button
                btnStyle={{
                  fontSize: "12px",
                  padding: "5px",
                  color: "#ffffff",
                  border: "none",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  backgroundColor: "#f56630",
                }}
              >
                <span>
                  <img src={searchIcon} alt="search-icon" />
                </span>
              </Button>
            </div>
          </div>
        </div>
        {/* desktop-search-element end*/}

        <div className="col-12 col-md-6 d-md-none">
          <div className="container img-con">
            <div className="img-con-box">
              <img className="layer1" src={layer1} alt="layer1" />
              <img className="layer2" src={layer2} alt="layer2" />
              <img className="layer3" src={layer3} alt="layer3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
