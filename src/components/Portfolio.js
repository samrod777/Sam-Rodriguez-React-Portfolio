import React from "react";
import "./style.css";
import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <div className="card">
              <div className="card-body">
                <h2 className="title">Portfolio</h2>
                <hr />
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
      ); }
    </React.Fragment>
  );
}

export default Portfolio;
