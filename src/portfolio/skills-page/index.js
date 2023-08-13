import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const SkillsScreen = () => {
  const cellStyle = {
    width: "100px", // Customize the width of each cell here
    height: "100px", // Customize the height of each cell here
    textAlign: "center", // Center the image horizontally in each cell
  };

  return (
    <div className="container">
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td style={cellStyle}>
            <img
                className="wd-img-width"
                src="./images/Java.png"
                alt="Java"
              />
            </td>
            <td style={cellStyle}>
              <img
                className="wd-img-width"
                src="./images/Python.png"
                alt="Python"
              />
            </td>
            <td style={cellStyle}>
              <img className="wd-img-width" src="./images/C++.png" alt="C++" />
            </td>
            <td style={cellStyle}>
              <img
                className="wd-img-width"
                src="./images/CSharp.png"
                alt="CSharp"
              />
            </td>
            <td style={cellStyle}>
              <img
                className="wd-img-width"
                src="./images/JS.png"
                alt="Javascript"
              />
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>
            <img
                className="wd-img-width"
                src="./images/Java.png"
                alt="Java"
              />
            </td>
            <td style={cellStyle}>
              <img
                className="wd-img-width"
                src="./images/Python.png"
                alt="Python"
              />
            </td>
            <td style={cellStyle}>
              <img className="wd-img-width" src="./images/C++.png" alt="C++" />
            </td>
            <td style={cellStyle}>
              <img
                className="wd-img-width"
                src="./images/CSharp.png"
                alt="CSharp"
              />
            </td>
            <td style={cellStyle}>
              <img
                className="wd-img-width"
                src="./images/JS.png"
                alt="Javascript"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SkillsScreen;
