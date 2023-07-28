import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const HomeScreen = () => {
  return (
    <div className="container h-100 d-flex  justify-content-center" >
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      {/* <div className="video-background">
        <video className="video-bg" autoPlay loop muted>
          <source src="images/Homepage-Spiderman.mp4" type="video/mp4" />
        </video>
      </div> */}
      <div className="d-flex align-items-center text-center" >
        <div className="wd-text-style">
          <span className="wd-span1">Hello</span> <br />
          <span className="wd-span2">I am Rahul</span> <br />
          <span className="wd-span3">A Master's in Computer Science Student</span>
        </div>
        <img
          src="images/HomePic2.jpg"
          alt="ProfilePic"
          className="wd-centered-image wd-rounded-circle wd-home-pic"
          style={{ width: "55%", maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
