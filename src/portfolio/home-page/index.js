import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const HomeScreen = () => {
  return (
    <div className="container">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="background">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
      </div>
      <div className="content">
        <h1>Hello Everyone</h1>
      </div>
    </div>
  );
};

export default HomeScreen;
