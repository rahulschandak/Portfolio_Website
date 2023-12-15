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

/*
Width greater that 576 are Tablets (isMobile = false)
Width smaller than 576 are Mobile Phones (isMobile = true).
*/
const NavigationBarMobile = () => {
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

  const renderLinks = (start, end, font_size) => (
    <div className="row">
      {links.slice(start, end).map((link) => (
        <div className="col wd-zero-padding" key={link.name}>
          <Link
            to={`/${link.name}`}
            className={`list-group-item wd-zero-padding ${
              active === link.name ? "active" : ""
            } d-flex`}
          >
            <div className={`col-3 text-center wd-left-padding ${font_size}`}>
              <FontAwesomeIcon icon={link.icon} />
            </div>
            <div className={`col-9 ${font_size}`}>{link.name}</div>
          </Link>
        </div>
      ))}
    </div>
  );

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
          <div className="wd-background2">
            {renderLinks(0, 4)}
            {renderLinks(4, links.length)}
          </div>
        )}

        {isMobile && (
          <div className="wd-background2">
            {renderLinks(0, 2, "wd-font-mobile")}
            {renderLinks(2, 4, "wd-font-mobile")}
            {renderLinks(4, 6, "wd-font-mobile")}
            {renderLinks(6, links.length, "wd-font-mobile")}
          </div>
        )}
      </div>
    </div>
  );
};
export default NavigationBarMobile;
