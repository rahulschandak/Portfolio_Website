import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const skillsData = [
  {
    id: 1,
    name: "HTML",
    image: require("./images/HTML.png"),
  },
  {
    id: 2,
    name: "CSS",
    image: require("./images/CSS.png"),
  },
  {
    id: 3,
    name: "Bootstrap",
    image: require("./images/Bootstrap.png"),
  },
  {
    id: 4,
    name: "ReactJS",
    image: require("./images/ReactJS.png"),
  },
  {
    id: 5,
    name: "NodeJS",
    image: require("./images/Node.png"),
  },
];

export default function SkillsWebTech() {
  return (
    <section id="teams" className="block teams-block">
      <h1 className="wd-sub-heading">
            Web Technologies
          </h1>
      <Container fluid>
        <Row>
            {skillsData.map(skills => {
                return (
                    <Col sm={2} key={skills.id}>
                        <div className="image">
                            <Image src={skills.image} alt={skills.name} />
                            <div><br /></div>
                        </div>
                    </Col>
                )
            })}
        </Row>
      </Container>
    </section>
  );
}
