import React from "react";
// import spaceImg from "../../assets/img/spacex-"

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://www.spacex.com/static/images/backgrounds-2022/sl4-2/post-launch/Homepage_Desktop.webp")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Here you will see come of the missions we´ve done .
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
