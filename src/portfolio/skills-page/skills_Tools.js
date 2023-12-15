import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import React, { useState, useEffect } from "react";

const skillsData = [
  {
    id: 1,
    name: "Visual Studio",
    image: require("./images/VS.png"),
  },
  {
    id: 2,
    name: "IntelliJ",
    image: require("./images/IntelliJ.png"),
  },
  {
    id: 3,
    name: "GIT",
    image: require("./images/GIT.png"),
  },
  {
    id: 3,
    name: "GITHUB",
    image: require("./images/GitHub.png"),
  },
  {
    id: 3,
    name: "Docker",
    image: require("./images/Docker.png"),
  },
  {
    id: 4,
    name: "Kubernetes",
    image: require("./images/Kubernetes.png"),
  },
  {
    id: 8,
    name: "Postman",
    image: require("./images/Postman.png"),
  },
  {
    id: 8,
    name: "AWS",
    image: require("./images/AWS.png"),
  },
  {
    id: 6,
    name: "MySQLWorkbench",
    image: require("./images/MySQLWorkbench.png"),
  },
  {
    id: 7,
    name: "Jenkins",
    image: require("./images/Jenkins.png"),
  },
  {
    id: 8,
    name: "Axure",
    image: require("./images/Axure.png"),
  },
];

const SkillsTools = () => {
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
      <h1 className="wd-sub-heading">Tools</h1>
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
};

export default SkillsTools;