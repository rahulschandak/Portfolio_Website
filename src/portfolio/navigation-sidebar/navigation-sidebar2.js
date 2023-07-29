import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import {
  faHouse,
  faContactCard,
  faFile,
  faBriefcase,
  faBook,
  faQuestionCircle,
  faPen,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Insta } from "feather-icons/dist/icons/instagram.svg";
import { ReactComponent as Github } from "feather-icons/dist/icons/github.svg";
import { ReactComponent as LinkedIn } from "feather-icons/dist/icons/linkedin.svg";

const NavigationSidebar2 = () => {
  const { pathname } = useLocation();
  const [active] = pathname.split("/");
  const links = [
    { name: "Home", icon: faHouse },
    { name: "About", icon: faQuestionCircle },
    { name: "Education", icon: faBook },
    { name: "Professional", icon: faBriefcase },
    { name: "Projects", icon: faPen },
    { name: "Skills", icon: faStar },
    { name: "Resume", icon: faFile },
    { name: "Contact", icon: faContactCard },
  ];
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 992 && window.innerWidth > 783);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="wd-padding-top ">
      <div className="">
        {/* <div className="wd-profile-pic">
          <img
            src="images/ProfilePic.jpeg"
            alt="ProfilePic"
            className="wd-centered-image wd-rounded-circle"
          />
        </div> */}

        <div className="wd-profile-pic">
          <label> Rahul Chandak </label>
        </div>

        <div className="wd-social-media">
          <div className="circle-box">
            <a
              href="https://www.linkedin.com/in/rahulschandak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
          </div>
          <div className="circle-box">
            <a
              href="https://github.com/rahulschandak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </div>
          <div className="circle-box">
            <a
              href="https://www.instagram.com/rahul_chandak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Insta />
            </a>
          </div>
        </div>

        {isSmallScreen && (<div className="wd-nav-bar-md-sm wd-background2">
          {links.map((link) => (
            <Link
              to={`/${link.name}`}
              className={`list-group-item text-capitalize ${
                active === link.name ? "active" : ""
              }`}
            >
              <FontAwesomeIcon icon={link.icon} /> &nbsp;
              {link.name}
            </Link>
          ))}
        </div>)}

        {!isSmallScreen && (<div className="wd-nav-bar-md-sm wd-background2">
          {links.map((link) => (
            <Link
              to={`/${link.name}`}
              className={`list-group-item text-capitalize ${
                active === link.name ? "active" : ""
              }`}
            >
              <FontAwesomeIcon icon={link.icon} /> &nbsp;
            </Link>
          ))}
        </div>)}

      </div>

      {/* <div className="d-block d-xl-none list-group"></div> */}
    </div>
  );
};
export default NavigationSidebar2;
