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
  return (
    <div className="wd-padding">
      <div className="row">
        {/* Left Column XL, XXL */}
        <div class="col-3 wd-border wd-background d-none d-xl-block d-lg-block d-md-none d-sm-none list-group">
          <NavigationSidebar />
        </div>

        <div class="row d-none d-xl-none d-lg-none d-md-block d-sm-block list-group">
          <NavigationSidebar2 />
        </div>

        {/* Middle Column L, XL, XXL */}
        <div class="col-9 wd-border wd-background2">
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
