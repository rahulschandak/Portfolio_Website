import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const EducationScreen = () => {
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
    <div className="container h-100 d-flex  justify-content-center">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div>
        <h1 className="education-heading">Education</h1>
        {!isMobile && (
          <div className="degree-info">
            <div className="card mb-4 wd-background-card wd-margin-right wd-padding-card-image">
              <img
                src="/images/NEU.png"
                alt="University"
                className="card-img-top wd-card-bordered1 wd-padding-card-image"
              />
              <div className="card-body wd-card-bordered2">
                <h3 className="card-title school-font">
                  <strong>Northeastern University</strong>{" "}
                  <span className="">(in progress) </span> <br />
                </h3>
                <label className="card-text degree-font">
                  {/* Khoury College of Computer Sciences
              <br /> */}
                  <strong>Degree: </strong>Master of Science
                  <br />
                  <strong>Major: </strong>Computer Science
                  <br />
                  <strong>Duration: </strong> September 2022 - May 2024
                  <br />
                  <strong>Location:</strong> Boston, USA
                  <br />
                  <strong>GPA:</strong> 3.87/ 4.0
                  <br />
                  <br />
                </label>
                <div className="wd-transcript-link">
                  <a
                    className="degree-font wd-transcript-link"
                    href="https://drive.google.com/file/d/12subWrxgFbvK-BjbaquHaqrRViKdELyQ/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Transcript
                  </a>
                </div>
              </div>
            </div>

            <div className="card mb-4 wd-background-card wd-padding-card-image">
              <img
                src="/images/MUM.png"
                alt="University"
                className="card-img-top wd-card-bordered1 wd-padding-card-image"
              />
              <div className="card-body wd-card-bordered2">
                <h3 className="card-title school-font">
                  <strong>University of Mumbai</strong> <br />
                </h3>
                <label className="card-text degree-font">
                  <strong>Degree: </strong>Bachelor of Engineering
                  <br />
                  <strong>Major: </strong>Electronics
                  <br />
                  <strong>Duration: </strong> August 2016 - October 2020
                  <br />
                  <strong>Location:</strong> Mumbai, India
                  <br />
                  <strong>GPA:</strong> 8.49/ 10.0
                  <br />
                  <br />
                </label>
                <div className="wd-transcript-link">
                  <a
                    className="degree-font wd-transcript-link"
                    href="https://drive.google.com/file/d/1VZNo-TjMDrdgvUj0aVDRl2JeM0yuCeWb/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Transcript
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        ;
        {isMobile && (
          <div className="card mb-4 wd-background-card2 wd-padding-card-image">
            <img
              src="/images/NEU.png"
              alt="University"
              className="card-img-top wd-card-bordered1 wd-padding-card-image"
            />
            <div className="card-body wd-card-bordered2">
              <h3 className="card-title school-font">
                <strong>Northeastern University</strong>
                <span className="">(in progress) </span> <br />
              </h3>
              <label className="card-text degree-font">
                {/* Khoury College of Computer Sciences
              <br /> */}
                <strong>Degree: </strong>Master of Science
                <br />
                <strong>Major: </strong>Computer Science
                <br />
                <strong>Duration: </strong> September 2022 - May 2024
                <br />
                <strong>Location:</strong> Boston, USA
                <br />
                <strong>GPA:</strong> 3.87/ 4.0
                <br />
                <br />
              </label>
              <div className="wd-transcript-link">
                <a
                  className="degree-font wd-transcript-link"
                  href="https://drive.google.com/file/d/12subWrxgFbvK-BjbaquHaqrRViKdELyQ/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Transcript
                </a>
              </div>
            </div>
          </div>
        )}
        ;
        {isMobile && (
          <div className="card mb-4 wd-background-card2 wd-padding-card-image">
            <img
              src="/images/MUM.png"
              alt="University"
              className="card-img-top wd-card-bordered1 wd-padding-card-image"
            />
            <div className="card-body wd-card-bordered2">
              <h3 className="card-title school-font">
                <strong>University of Mumbai</strong> <br />
              </h3>
              <label className="card-text degree-font">
                <strong>Degree: </strong>Bachelor of Engineering
                <br />
                <strong>Major: </strong>Electronics
                <br />
                <strong>Duration: </strong> August 2016 - October 2020
                <br />
                <strong>Location:</strong> Mumbai, India
                <br />
                <strong>GPA:</strong> 8.49/ 10.0
                <br />
                <br />
              </label>
              <div className="wd-transcript-link">
                <a
                  className="degree-font wd-transcript-link"
                  href="https://drive.google.com/file/d/1VZNo-TjMDrdgvUj0aVDRl2JeM0yuCeWb/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Transcript
                </a>
              </div>
            </div>
          </div>
        )}
        ;
      </div>
    </div>
  );
};

export default EducationScreen;
