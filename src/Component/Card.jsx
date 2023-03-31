import React from "react";
import "./Card.css";
import view from "../Assests/view.png";
import view2 from "../Assests/view2.png";
import User from "../Assests/User.png";
import User2 from "../Assests/User2.png";
import circle from "../Assests/IconSide/circle.png";
import Star from "../Assests/IconSide/Star.png";

const Card = () => {
  return (
    <div className="card-lead">
      <div className="card-main">
        <p className="testi">Testimonial</p>
        <div className="title">
          <h1>What Our Customer Say</h1>
          <div className="img-side">
            <img src={view2} alt="" />
            <img src={view} alt="" />
          </div>
        </div>
        {/**card */}
        <div className="card-container">
          <div className="gray-bg">
            <div className="card">
              <div className="card-header">
                <div className="share">
                  <img src={User} alt="" className="user" />
                  <div className="mid">
                    <h4 className="name">Kathleen Smith</h4>
                    <h5 className="infor">Fuel Company</h5>
                  </div>
                </div>
                <div>
                  <img src={circle} alt="" className="side-im" />
                </div>
              </div>
              <div className="card-body">
                <p className="three-lines">
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                </p>
              </div>
              <div>
                <img src={Star} alt="" />
              </div>
            </div>
          </div>
          <div className="blue-bg">
            <div className="card">
              <div className="card-header">
                <div className="share">
                  <img src={User2} alt="" className="user" />
                  <div className="mid">
                    <h4 className="name">John Martin</h4>
                    <h5 className="infor-T">Restoration Company</h5>
                  </div>
                </div>
                <div>
                  <img src={circle} alt="" className="side-im" />
                </div>
              </div>
              <div className="card-body">
                <p className="three-line">
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                </p>
              </div>
              <div>
                <img src={Star} alt="" />
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
