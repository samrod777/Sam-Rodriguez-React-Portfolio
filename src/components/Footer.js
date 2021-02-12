import React from "react";
import "./style.css";

function Footer() {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="footer-copyright text-center p-4">
          <span className="icon-span">
            <a
              id="linkedin"
              className="icon"
              href="https://www.linkedin.com/in/sam-rodriguez-dev/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="mr-2 fab fa-linkedin"></span>
            </a>
          </span>
          <span className="icon-span">
            <a
              id="github"
              className="icon"
              href="https://github.com/samrod777"
              target="_blank"
              rel="noreferrer"
            >
              <span className="mr-2 fab fa-github">test test</span>
            </a>
          </span>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
