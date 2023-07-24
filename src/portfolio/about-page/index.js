import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const AboutScreen = () => {
  return (
    <div className="container wd-padding-bottom">
      <h1 className="about-heading wd-typewriter-label">Hello World!👋</h1>

      <div className="col-sm-0 col-md-0 col-lg-12 col-xl-12 col-xxl-12 d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none d-xsm-none">
        <div className="about-info">
          <div className="wd-padding-right">
            {/* First Div */}
            <div className="wd-background3 wd-margin1">
              <ul className="wd-fancy-bullets">
                Past <br />
                <li>
                  Embarked on a thrilling journey in the world of technology
                  during my undergraduate years, exploring the wonders of
                  electronics and the art of problem-solving.
                </li>
                <li>
                  Ventured into the realm of programming, where I discovered the
                  magic of coding languages and their power to bring ideas to
                  life.
                </li>
                <li>
                  Honed my skills as a Full Stack Developer during my time at
                  Tata Consultancy Services, learning the art of building
                  seamless digital experiences.
                </li>
              </ul>
            </div>
            {/* Second Div */}
            <div className="wd-background3 wd-margin2">
              <ul className="wd-fancy-bullets">
                Future <br />
                <li>
                  Eagerly seeking exciting SDE internships and full time
                  opportunities to apply my skills and passion to real-world
                  projects, making a meaningful impact on users and the digital
                  landscape.
                </li>
                <li>
                  Dreaming of becoming a coding superhero, and harness the
                  immense power of the cloud.
                </li>
                <li>
                  Envisioning a future where I'm at the forefront of innovative
                  tech, leading teams and collaborating with brilliant minds to
                  shape the future of software development.
                </li>
              </ul>
            </div>
          </div>
          {/* Third div */}
          <div className="wd-background3 wd-margin3 wd-vertical-center">
            <ul className="wd-fancy-bullets">
              Present <br />
              <li>
                Pursuing my Master of Science in Computer Science at
                Northeastern University
              </li>
              <li>
                Continuously pushing boundaries and expanding my knowledge in
                languages like Java, Python, and JavaScript to create efficient
                and elegant solutions.
              </li>
              <li>
                Exploring the world of databases with SQL and MongoDB, mastering
                the art of managing data and building robust applications.
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="col-sm-12 col-md-12 col-lg-0 col-xl-0 col-xxl-0 d-xxl-none d-xl-none d-lg-none d-md-block d-sm-block d-xsm-block">
        {/* First Div */}
        <div className="wd-background3 wd-margin11">
          <ul className="wd-fancy-bullets">
            Past <br />
            <li>
              Embarked on a thrilling journey in the world of technology during
              my undergraduate years, exploring the wonders of electronics and
              the art of problem-solving.
            </li>
            <li>
              Ventured into the realm of programming, where I discovered the
              magic of coding languages and their power to bring ideas to life.
            </li>
            <li>
              Honed my skills as a Full Stack Developer during my time at Tata
              Consultancy Services, learning the art of building seamless
              digital experiences.
            </li>
          </ul>
        </div>
        {/* Second Div */}
        <div className="wd-background3 wd-margin11">
          <ul className="wd-fancy-bullets">
            Present <br />
            <li>
              Pursuing my Master of Science in Computer Science at Northeastern
              University
            </li>
            <li>
              Continuously pushing boundaries and expanding my knowledge in
              languages like Java, Python, and JavaScript to create efficient
              and elegant solutions.
            </li>
            <li>
              Exploring the world of databases with SQL and MongoDB, mastering
              the art of managing data and building robust applications.
            </li>
          </ul>
        </div>

        {/* Third div */}
        <div className="wd-background3 wd-margin11">
          <ul className="wd-fancy-bullets">
            Future <br />
            <li>
              Eagerly seeking exciting SDE internships and full time
              opportunities to apply my skills and passion to real-world
              projects, making a meaningful impact on users and the digital
              landscape.
            </li>
            <li>
              Dreaming of becoming a coding superhero, and harness the immense
              power of the cloud.
            </li>
            <li>
              Envisioning a future where I'm at the forefront of innovative
              tech, leading teams and collaborating with brilliant minds to
              shape the future of software development.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
