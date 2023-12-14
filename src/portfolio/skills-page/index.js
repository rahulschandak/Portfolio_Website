import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import SkillsProgLang from "./skills_ProgrammingLanguages";
import SkillsWebTech from "./skills_WebTechnologies";
import SkillsDatabase from "./skills_Database";
import SkillsTools from "./skills_Tools";

const SkillsScreen = () => {
  return (
    <div className="container">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div>
        <h1 className="skills-heading wd-typewriter-label">Skills</h1>

        <SkillsProgLang />
        <div className="wd-space-between-skills"></div>
        <SkillsWebTech />
        <div className="wd-space-between-skills"></div>
        <SkillsDatabase />
        <div className="wd-space-between-skills"></div>
        <SkillsTools />
      </div>
    </div>
  );
};

export default SkillsScreen;
