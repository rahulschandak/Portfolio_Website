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
  return (
    <div className="wd-padding-top ">
      <div className="">
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

        {!isMobile && (
          <div className="wd-nav-bar-md-sm wd-background2">
            {links.map((link) => (
              <Link
                to={`/${link.name}`}
                className={`list-group-item text-capitalize ${
                  active === link.name ? "active" : ""
                } d-flex align-items-center justify-content-center w-100`}
              >
                <FontAwesomeIcon icon={link.icon} />
              </Link>
            ))}
          </div>
        )}

        {isMobile && (
          <div className="wd-background2">
            <div className="row">
              {links.slice(0, 4).map((link) => (
                <div className="col wd-zero-padding" key={link.name}>
                  <Link
                    to={`/${link.name}`}
                    className={`list-group-item text-capitalize ${
                      active === link.name ? "active" : ""
                    } d-flex align-items-center justify-content-center w-100`}
                  >
                    <FontAwesomeIcon icon={link.icon} />
                  </Link>
                </div>
              ))}
            </div>
            <div className="row">
              {links.slice(4).map((link) => (
                <div className="col wd-zero-padding" key={link.name}>
                  <Link
                    to={`/${link.name}`}
                    className={`list-group-item text-capitalize ${
                      active === link.name ? "active" : ""
                    } d-flex align-items-center justify-content-center w-100`}
                  >
                    <FontAwesomeIcon icon={link.icon} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default NavigationSidebar2;
