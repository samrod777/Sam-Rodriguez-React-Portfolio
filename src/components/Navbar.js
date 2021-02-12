import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Navbar() {
  const location = useLocation();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-light">
        <div className="col-sm-2"></div>
        <h2 id="head" className="col-sm-2">
          Sam Rodriguez
        </h2>
        <div className="col-sm-2"></div>
        <div className="col-sm-2"></div>
        <div className="col-sm-2" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav" />
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                to="/portfolio-react/about"
                className={
                  location.pathname === "/" || "/portfolio-react/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </li>
            <li className="nav-item">
            <Link
                to="/portfolio-react/projects"
                className={
                  location.pathname === "/portfolio-react/projects"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
            <Link
                to="/portfolio-react/contact"
                className={
                  location.pathname === "/portfolio-react/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-2"></div>
      </nav>
    </header>
  );
}

export default Navbar;
