import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import samplePDF from "./Resume_Rahul_Chandak.pdf";

const ResumeScreen = () => {
  const openPDFInNewTab = () => {
    window.open(samplePDF, "_blank");
  };

  return (
    <div className="container h-100">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div>
        <h1 className="resume-heading">Resume</h1>
      </div>
      <button className="wd-button-properties" onClick={openPDFInNewTab}>Download Resume</button>
    </div>
  );
};

export default ResumeScreen;
