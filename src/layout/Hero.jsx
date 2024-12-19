import Header from "./Header";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <Header />
        <div className="m-4">
          <h1 className="h1 display-3 fw-bold text-white text-center p-2 mb-0">
            The Best Place To Find Your Dream House
          </h1>
          <p className="dispaly-6 small text-white text-center p-2">
            A great platform to buy, sell, or even rent your properties without
            any commisions
          </p>

          {/* company stats */}
          <div className="stat-info d-flex">
            <div className="info info-1 px-2 border-start border-2">
              <h4 className="mb-0">1200+</h4>
              <p className="small text-white mb-0">Rentals</p>
            </div>

            <div className="info info-2 px-2 border-start border-2">
              <h4 className="mb-0">200+</h4>
              <p className="small text-white mb-0">Listed properties</p>
            </div>

            <div className="info info-2 px-2 border-start border-2">
              <h4 className="mb-0">100+</h4>
              <p className="small text-white mb-0">Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
