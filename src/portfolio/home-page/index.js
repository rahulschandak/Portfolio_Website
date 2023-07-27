import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const HomeScreen = () => {
  return (
    <div className="container">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      {/* <div className="video-background">
        <video className="video-bg" autoPlay loop muted>
          <source src="images/Homepage-Spiderman.mp4" type="video/mp4" />
        </video>
      </div> */}
      {/* <div className="wd-home-info">
        <div className="wd-home-pic">
          <img
            src="images/ProfilePic.jpeg"
            alt="ProfilePic"
            className="wd-centered-image wd-rounded-circle"
          />
        </div>
        <div className="content">
          <h4>Hello Everbody 👋</h4>
          <h1>My name is Rahul Chandak</h1>
          <h4>
            I am a master's in computer science student at Northeastern
            University, Boston
          </h4>
        </div>
      </div> */}
    </div>
  );
};

export default HomeScreen;
