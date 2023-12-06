// import react from 'react'
import imgg from "../../assets/images/aaa.webp";
import imgg2 from "../../assets/images/readcccd.png";

import "./pages.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-main">
        <div className="home-main-right">
          <img className="main-img" src={imgg} alt="imgg" />
          <div className="text-show">
            <p id="name-denoise">IDENTITY CARD </p>
            <p id="name-100">
              100% Automatically and <span>Free</span>{" "}
            </p>
          </div>
        </div>
        <div className="home-main-left">
          <div className="upload">
            <a href="/reader" className="btn-upload">
              Read Card
            </a>
          </div>
          <div >
            <img className="read-img" src={imgg2} alt="read" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
