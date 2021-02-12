import React from "react";
import "../components/style.css"


function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row" />
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <div className="card">
            <div className="card-body">
              <form>
                <h2 className="title">Contact</h2>
                <hr />
                <div className="form-group">
                  <label for="InputName">Name</label>
                  <input
                    type="name"
                    className="form-control"
                    id="InputName"
                    placeholder="John Smith"
                  />
                </div>
                <div className="form-group">
                  <label for="InputEmail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="InputEmail"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label for="InputMessage">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder=""
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-info col-sm-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
