import React from "react";

function PortfolioCard(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <div className="card">
            <div className="card-body">
              <h2 className="title">Portfolio</h2>
              <hr />
              <div class="row">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
