import React from "react";
import "./Feature.css";
import show from "../Assests/show.png";
import show2 from "../Assests/show2.png";
import show3 from "../Assests/show3.png";
import show4 from "../Assests/show4.png";
import Transporting from "./Transporting";
import WhyUs from "./WhyUs";

const Feature = () => {
  return (
    <div className="main">
      <div className="min">
        <div className="first">
          <p className="small-text">what we do</p>
          <h2 className="head">
            Safe & Reliable <br />
            Cargo Solutions
          </h2>
        </div>
        <div className="second">
          <div className="try">
            <img src={show} alt="" className="show-y" />
            <div className="vertical-line"></div>

            <div>
              <h3>Sea Transport Services</h3>
              <p className="try-sub">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
          <div className="try">
            <img src={show2} alt="" className="show-y" />
            <div className="vertical-line"></div>

            <div>
              <h3>Air Fright Services</h3>
              <p className="try-sub">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
        </div>
        <div className="thrid">
          <div className="try">
            <img src={show3} alt="" className="show-T" />
            <div className="vertical-line"></div>

            <div>
              <h3>Warehousing Services</h3>
              <p className="try-sub">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
          <div className="try">
            <img src={show4} alt="" className="show-T" />
            <div className="vertical-line"></div>

            <div>
              <h3>Local Shipping Services</h3>
              <p className="try-sub">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/**Why us details */}
      <WhyUs />
    </div>
  );
};

export default Feature;
