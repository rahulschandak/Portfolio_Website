import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const skillsData = [
  {
    id: 1,
    name: "MySQL",
    image: require("./images/MySQL.png"),
  },
  {
    id: 2,
    name: "PLSQL",
    image: require("./images/PLSQL.png"),
  },
  {
    id: 3,
    name: "MongoDB",
    image: require("./images/MongoDB.png"),
  },
];

export default function SkillsDatabase() {
  return (
    <section id="teams" className="block teams-block">
      <h1 className="wd-sub-heading">
            Database
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
