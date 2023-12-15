import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const HomeScreen = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth < 576);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="container h-100 d-flex  justify-content-center">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      {/* <div className="video-background">
        <video className="video-bg" autoPlay loop muted>
          <source src="images/Homepage-Spiderman.mp4" type="video/mp4" />
        </video>
      </div> */}

      {!isMobile && (
        <div className="d-flex align-items-center text-center wd-margin-top">
          <div className="wd-text-style">
            <span className="wd-span1-desktop">Hello Everyone!</span> <br />
            <span className="wd-span2-desktop">I'm Rahul</span> <br />
            <span className="wd-span3-desktop">
              A Master's in Computer Science Student
            </span>
          </div>
          <img
            src="images/HomePic2.jpg"
            alt="ProfilePic"
            className="wd-centered-image wd-rounded-circle"
            style={{ width: "55%", maxWidth: "100%", height: "auto" }}
          />
        </div>
      )}

      {isMobile && (
        <div className="text-center wd-margin-top">
          <img
            src="images/HomePic2.jpg"
            alt="ProfilePic"
            className="wd-centered-image wd-rounded-circle-mobile"
            style={{ width: "55%", maxWidth: "100%", height: "auto" }}
          />
          <div className="wd-text-style">
            <span className="wd-span1-mobile">Hello Everyone!</span> <br />
            <span className="wd-span2-mobile">I'm Rahul</span> <br />
            <span className="wd-span3-mobile">
              A Master's in Computer Science Student
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
