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
import HomeScreen from "./home-page";
import SkillsScreen from "./skills-page";

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

  const [showPopup, setShowPopup] = useState(true);
  useEffect(() => {
    const visitedBefore = localStorage.getItem("visitedBefore");
    if (!visitedBefore) {
      setShowPopup(true);
      localStorage.setItem("visitedBefore", "true");
    }
  }, []);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="full-height">
      <div className="row flex-grow-1">
        {/* Left Column XL, XXL */}
        {!isMobile && (
          <div className="col-3 wd-background list-group min-vh-100 wd-border-right">
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
            <Route path="" element={<HomeScreen />} />
            <Route path="/Home" element={<HomeScreen />} />
            <Route path="/About" element={<AboutScreen />} />
            <Route path="/Education" element={<EducationScreen />} />
            <Route path="/Professional" element={<ProfExpScreen />} />
            <Route path="/Skills" element={<SkillsScreen />} />
            <Route path="/Resume" element={<ResumeScreen />} />
            <Route path="/Contact" element={<ContactScreen />} />
          </Routes>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>
              This website is a ground-up creation, entirely designed from
              scratch by Rahul Chandak.
            </p>
            <p>
              It remains an ongoing project, constantly evolving with frequent
              updates to enhance its features and functionality.
            </p>
            <p>
              <button className="btn btn-primary" onClick={handlePopupClose}>
                Proceed to website
              </button>
            </p>
            <p>
              Looking to connect professionally? Feel free to visit Rahul's
              LinkedIn profile.
            </p>
            <button className="btn btn-primary">
              <a
                href="https://www.linkedin.com/in/rahulschandak/"
                target="_blank"
                rel="noopener noreferrer"
                className="wd-button-font"
              >LinkedIn</a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
