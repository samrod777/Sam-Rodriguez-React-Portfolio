import React from "react";
import "./style.css";
import PortfolioCard from "./PortfolioCard";
// import projects from "../projects.json";

function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <div className="card">
            <div className="card-body">
              <h2 className="title">Portfolio</h2>
              <hr/>
              <div className="row">
                <div className="col-sm-12">
                  <div className="card border-0">
                    <PortfolioCard/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
