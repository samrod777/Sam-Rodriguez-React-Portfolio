import React from "react";

function PortfolioCard(props) {
  return (
    <div className="col-sm-6">
      <div className="card border-0">
        <a href={props.data.href}>
          <img
            className="card-img-top"
            src={props.data.src}
            alt={props.data.alt}
          />
          <div className="stripe">{props.data.stripe}</div>
        </a>
      </div>
    </div>
  );
}

export default PortfolioCard