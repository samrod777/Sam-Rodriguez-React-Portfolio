import React from "react";
import "../components/style.css"
import SamProfilePic from "../assets/SamProfile2.JPG"

function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <div className="card">
              <div className="card-body">
                <h2 className="title"> About Me</h2>
                <hr />
                <img
                  className="photo"
                  src={SamProfilePic}
                  alt="Sam Rodriguez profile picture"
                />
                <p>
                  Hi, my name is Sam Rodriguez, I am currently the Product
                  Development Director at Lightouse for the Blind, Inc. I also
                  have full-stack web development skills and entrepreneurial
                  ambitions. During my 10 plus years in the Government and
                  Nonprofit industry, I have worked in multi-level relations
                  management, led many product development projects from
                  begining to end, and posses experience writing technical
                  documentation.
                </p>

                <p>
                  I earned a Bachelor of Science in Mechanical Ingeneering from
                  San Jose State University and a Certificate of Business
                  Administration from Darden School of Business. In February
                  2021, I will be completing an immersive, certificate
                  full-stack web development bootcamp from the University of
                  Washington.
                </p>

                <p>
                  Take a look at some of the projects I have worked on so far.
                  Files for each project can be found by clicking on the Github
                  link below.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
