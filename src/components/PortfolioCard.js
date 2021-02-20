import React from "react";
import projects from "../projects.json";

function PortfolioCard(props) {
  const PortfolioData = projects.projects.map((item) =>{
    return(<div className="col-sm-6">
      <a href={item.href}>
        <img
          className="card-img-top"
          key={item["_id"]}
          src={item.src}
          alt={item.alt}
        />
        console.log(src)
        <div className="stripe">{item.stripe}</div>
      </a>
    </div>)
  })

  return (
    <div className="row">
    {PortfolioData}
    </div>
  )
}


export default PortfolioCard;
