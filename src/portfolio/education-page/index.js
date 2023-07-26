import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const EducationScreen = () => {
  return (
    <div className="container wd-background-black">
      <h1 className="education-heading">Education</h1>

      <div className="col-sm-0 col-md-0 col-lg-12 col-xl-12 col-xxl-12 d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none d-xsm-none d-none">
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
      </div>

      <div className="col-sm-11 col-md-11 col-lg-0 col-xl-0 col-xxl-0 d-xxl-none d-xl-none d-lg-none d-md-block d-sm-block d-xsm-block">
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
      </div>
    </div>
  );
};

export default EducationScreen;
