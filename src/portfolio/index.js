import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import NavigationSidebar from "./navigation-sidebar";
import NavigationSidebar2 from "./navigation-sidebar/navigation-sidebar2";
import { Routes, Route } from "react-router";
import EducationScreen from "./education-page";
import AboutScreen from "./about-page";
import ProfExpScreen from "./prof-exp-page";
import ResumeScreen from "./resume-page";
import ContactScreen from "./contact-page";

function Portfolio() {
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
    <div className="full-height">
      <div className="row flex-grow-1">
        {/* Left Column XL, XXL */}
        {!isMobile && (
          <div className="col-3 wd-background list-group min-vh-100">
            <NavigationSidebar />
          </div>
        )}

        {/* Render NavigationSidebar2 only when isMobile is true */}
        {isMobile && (
          <div className="col-12 list-group">
            <NavigationSidebar2 />
          </div>
        )}

        {/* Middle Column L, XL, XXL */}
        <div
          className={
            isMobile
              ? "col-12 wd-background2 full-height-content"
              : "col-9 wd-background2 full-height-content min-vh-100"
          }
        >
          <Routes>
            <Route path="/Home" element={<h1>Home</h1>} />
            <Route path="/About" element={<AboutScreen />} />
            <Route path="/Education" element={<EducationScreen />} />
            <Route path="/Professional" element={<ProfExpScreen />} />
            <Route path="/Resume" element={<ResumeScreen />} />
            <Route path="/Contact" element={<ContactScreen />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
