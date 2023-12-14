import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import React, { useState, useEffect } from "react";

const skillsData = [
  {
    id: 1,
    name: "Java",
    image: require("./images/Java.png"),
  },
  {
    id: 2,
    name: "Python",
    image: require("./images/Python.png"),
  },
  {
    id: 3,
    name: "CSharp",
    image: require("./images/CSharp.png"),
  },
  {
    id: 4,
    name: "JavaScript",
    image: require("./images/JS.png"),
  },
  {
    id: 4,
    name: "R",
    image: require("./images/R.png"),
  },
];

const SkillsProgLang = () => {
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
    <section id="teams" className="block teams-block">
      <h1 className="wd-sub-heading">Programming Languages</h1>
      {!isMobile && (
        <Container fluid>
          <Row>
            {skillsData.map((skills) => {
              return (
                <Col sm={2} key={skills.id}>
                  <div className="image">
                    <Image src={skills.image} alt={skills.name} />
                    <div>
                      <br />
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      )}

{isMobile && (
        <Container fluid>
          <Row>
            {skillsData.map((skills) => {
              return (
                <Col sm={2} xs={4} key={skills.id}>
                  <div className="image">
                    <Image src={skills.image} alt={skills.name} />
                    <div>
                      <br />
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
    </section>
  );
}



export default SkillsProgLang;