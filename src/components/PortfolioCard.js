import React from "react";
import projects from "../projects.json";
// import image from "../assets/Eat-da-burger-screenshot.png"

function PortfolioCard(props) {
  const PortfolioData = projects.projects.map((props) => {
    console.log(props)
    
    return (
      <div className="col-sm-6" key={props.id}>

        <a href={props.href}>
          <img className="card-img-top" src={props.image} alt={props.alt} />
          <div className="stripe">{props.stripe}</div>
        </a>
      </div>
      
    );
  });

  return <div className="row">{PortfolioData}</div>;
}

export default PortfolioCard;
