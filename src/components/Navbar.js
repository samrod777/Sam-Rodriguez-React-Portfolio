
import React from "react";
import { Link, useLocation } from "react-router-dom";
// import "./style.css";

function Navbar() {

const location = useLocation();

  return (
  
    <header>
        <nav className="navbar navbar-expand-lg navbar-light">
            <h1 id="navhead"><b>Sam Rodriguez</b></h1>
                <span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </span>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <li><Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>About</Link></li>
                    <li><Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link></li>
                    <li><Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link></li>
                </div>
            </div>
        </nav>
    </header>
)

}

export default Navbar;