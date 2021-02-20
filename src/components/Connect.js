import React from "react";
import "./style.css";

function Connect() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
        <div className="card">
          <div className="card-body">
            <h2 className="connect"> Connect with me</h2>
            <hr />
            <ul className="connectLinks" />
            <ul className="connect-nav mr-auto">
              <li className="connect-nav-item active">
                <a className="nav-link" href="https://github.com/samrod777">
                  Github: https://github.com/samrod777
                </a>
              </li>
              <li className="connect-nav-item active">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/sam-rodriguez-Dev"
                >
                  Linkedin: www.linkedin.com/in/sam-rodriguez-Dev
                </a>
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
}

export default Connect;
