import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const ProfExpScreen = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth < 992);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="container h-100">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      {!isMobile && (
        <div>
          <h1 className="prof-heading wd-typewriter-label">
            Professional Experience
          </h1>
          <div className="image-info-container wd-margin-0">
            <div className="image-info-pair wd-background5 wd-margin-1">
              <div className="wd-padding-right wd-company-pic">
                <img
                  className="wd-width-image"
                  src="/images/TCS.png"
                  alt="TCS"
                />
              </div>
              <div className="info-container">
                <h3>Tata Consultancy Services Pvt. Ltd.</h3>
                Assistant System Engineer - Full Stack Developer <br />
                September 2020 - July 2022
              </div>
            </div>
            <div className="image-info-pair wd-background5 wd-margin-2">
              <div className="info-container wd-padding-right">
                <h3>CampK12 Academy</h3>
                Technical Assistant Intern
                <br />
                July 2018 - September 2018
              </div>
              <div className="wd-company-pic">
                <img
                  className="wd-width-image"
                  src="/images/CK12.png"
                  alt="CK12"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div>
          <h1 className="prof-heading wd-typewriter-label">
            Professional Experience
          </h1>
          <div className="image-info-pair wd-background5 wd-margin-bottom">
            <div className="wd-padding-right wd-company-pic">
              <img className="wd-mobile-img-width" src="/images/TCS.png" alt="TCS" />
            </div>
            <div className="info-container">
              <h3>Tata Consultancy Services Pvt. Ltd.</h3>
              Assistant System Engineer - Full Stack Developer <br />
              September 2020 - July 2022
            </div>
          </div>
          <div className="image-info-pair wd-background5 wd-margin-bottom">
            <div className="wd-padding-right wd-company-pic">
              <img className="wd-mobile-img-width" src="/images/CK12.png" alt="TCS" />
            </div>
            <div className="info-container">
              <h3>CampK12 Academy</h3>
              Assistant Technical Intern <br />
              July 2018 - September 2018
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfExpScreen;
