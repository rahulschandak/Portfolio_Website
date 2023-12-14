import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const ProjectsScreen = () => {
  return (
    <div className="container h-100 d-flex  justify-content-center">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div>
        <h1 className="project-heading">Projects</h1>
        <div className="">
          {/* First Proj */}
          <div className="wd-background4 wd-margin11 wd-border-style">
            <ul className="wd-font-color">
              <label className="wd-project-title">BrewCritic</label> <br />
              <label className="wd-tech-stack">
                React.js, Node.js, Bootstrap, MongoDB, RESTful API, Tailwind CSS
              </label>
              <br />
              <li>
                Created RESTful Brewery review website using Node.js for
                backend, React.js for dynamic rendering and MongoDB for
                database.
              </li>
              <li>
                Implemented features like multi-user authentication (Redux),
                activity monitoring, profile management, responsiveness, API
                integration and achieved load time under 1 second.
              </li>
              <button className="wd-button-properties2">
                <a
                  className="wd-project-link"
                  href="https://github.com/rahulschandak/BrewCritic_Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project Link
                </a>
              </button>
            </ul>
          </div>
          {/* First Proj */}
          <div className="wd-background4 wd-margin11 wd-border-style">
            <ul className="wd-font-color">
              <label className="wd-project-title">RateMyCoop</label> <br />
              <label className="wd-tech-stack">
                Axure RP 10, HCI life cycle
              </label>
              <br />
              <li>
                Designed an interactive and informative mobile application using
                Axure RP implementing core design principles and HCI life cycle,
                from ideation to delivery, enabling students to share their
                internship experiences.
              </li>
              <li>
                Created wireframes, conducted formative & heuristic evaluations,
                usability tests, summative evaluations, and iterations to
                complete the design using Axure RP 10. Results included a System
                Usability Score of 87.5
              </li>
              <button className="wd-button-properties2">
                <a
                  className="wd-project-link"
                  href="https://github.com/rahulschandak/RateMyCoop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project Link
                </a>
              </button>
            </ul>
          </div>
          {/* Second Proj */}
          <div className="wd-background4 wd-margin11 wd-border-style">
            <ul className="wd-font-color">
              <label className="wd-project-title">
                Stock Portfolio Tracker{" "}
              </label>{" "}
              <br />
              <label className="wd-tech-stack">Java, Swing, MVC, API</label>
              <br />
              <li>
                Developed a prototype desktop application to perform CRUD
                operations using stocks. The entire code was developed using MVC
                architecture (in Java) involving various code design patterns
                implementing SOLID principles. Java Swing was used for the GUI.
              </li>
              <li>
                The user could create flexible and rigid portfolios and add
                stocks to them, view their value, cost basis, and performance
                graph as well. Real-time prices of these stocks were fetched
                from the AlphaVantage API.
              </li>
              <li>
                Intensive testing of the model and controller was carried out
                using JUnit 4.
              </li>
              <button className="wd-button-properties2">
                <a
                  className="wd-project-link"
                  href="https://github.com/rahulschandak/Stock-Portfolio-Tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project Link
                </a>
              </button>
            </ul>
          </div>

          {/* Third Proj */}
          <div className="wd-background4 wd-margin11 wd-border-style">
            <ul className="wd-font-color">
              <label className="wd-project-title">
                Supermarket Management System
              </label>
              <br />
              <label className="wd-tech-stack">MySQL, JDBC, Java, Swing</label>
              <br />
              <li>
                Developed a full-stack desktop application simulating a
                supermarket management system where customers and employees can
                log in and perform dedicated tasks.
              </li>
              <li>
                Designed a relational database and performed 5 CRUD operations
                involving stored procedures, functions, and triggers. Utilized
                JDBC driver to integrate the database with GUI ensuring seamless
                data management and retrieval.
              </li>
              <button className="wd-button-properties2">
                <a
                  className="wd-project-link"
                  href="https://github.com/rahulschandak/Supermarket-Management-System"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project Link
                </a>
              </button>
            </ul>
          </div>

          {/* Fourth Proj */}
          <div className="wd-background4 wd-margin11 wd-border-style">
            <ul className="wd-font-color">
              <label className="wd-project-title">
                Predictive Analytics for Depression
              </label>
              <br />
              <label className="wd-tech-stack">
                {" "}
                Python, NumPy, Pandas, Scikit-learn
              </label>
              <br />
              <li>
                Carried out data tidying, data visualization, outlier detection,
                exploratory data analysis, and feature selection in an attempt
                to shortlist potential symptoms and reasons that can develop
                depression among individuals and help to identify them at an
                early stage.
              </li>
              <li>
                Used Python and trained 5 Supervised Machine Learning prediction
                models splitting the dataset in an 80:20 ratio (training vs
                test).
              </li>
              <button className="wd-button-properties2">
                <a
                  className="wd-project-link"
                  href="https://github.com/rahulschandak/Predictive-Analytics-for-Depression"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project Link
                </a>
              </button>
            </ul>
          </div>

          {/* Fifth Proj */}
          <div className="wd-background4 wd-margin11 wd-border-style">
            <ul className="wd-font-color">
              <label className="wd-project-title">COVID-19 Supplies</label>
              <br />
              <label className="wd-tech-stack">
                Python, Django, Tkinter, SQLite3, HTML CSS
              </label>
              <br />
              <li>
                An IIT Bombay Hackathon website project was created to help
                people to locate and find supplier details for any medical
                needs.
              </li>
              <li>
                The project filters out the medical shops and hospitals near the
                user's location and checks for the availability of the
                requirements posted by them.
              </li>
              <li>
                This project was made to help people during the COVID-19
                pandemic.
              </li>
              <button className="wd-button-properties2">
                <a
                  className="wd-project-link"
                  href="https://www.youtube.com/watch?v=dl6NbeQR7V0&feature=youtu.be&ab_channel=HarshAgrawal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project Link
                </a>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsScreen;
