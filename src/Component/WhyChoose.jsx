import React from "react";
import "./WhyChoose.css";
import Icon8 from "../Assests/icons/Icon8.png";
import Icon2 from "../Assests/icons/Icon2.png";
import Icon3 from "../Assests/icons/Icon3.png";
import Icon4 from "../Assests/icons/Icon4.png";
import Icon5 from "../Assests/icons/Icon5.png";
import Icon6 from "../Assests/icons/Icon6.png";
import plane from "../Assests/plane.png";
import tiny from "../Assests/tiny.png";

const WhyChoose = () => {
  return (
    <div className="Segment-main">
      <div className="sub-seg1">
        <div className="airPlane">
          <img className="airplane-img" src={plane} alt="" />
          <div className="tag">
            <img className="airplane-tag" src={tiny} alt="" />
            <p className="tag-text">Moving your products across borders</p>
          </div>
        </div>
      </div>
      <div className="sub-seg2">
        <div className="inner-seg">
          <div className="smallCard">
            <div className="upper">
              <p className="tag-unit">Why Choose</p>
              <h4 className="header-unit">
                We create opportunity to <br />
                reach potential
              </h4>
              <h5 className="text-unit">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition.
              </h5>
            </div>
            <div className="lower">
              <div className="pac1">
                <div className="item1">
                  <img src={Icon8} alt="icon" />
                  <p className="item-tags">Safe Package</p>
                </div>
                <div className="item1">
                  <img src={Icon2} alt="icon" />
                  <p className="item-tags">Global Tracking</p>
                </div>
                <div className="item1">
                  <img src={Icon3} alt="icon" />
                  <p className="item-tags">In Time Delivery</p>
                </div>
              </div>
              <div className="pac2">
                <div className="item1">
                  <img src={Icon4} alt="icon" />
                  <p className="item-tags">Ship Everyware</p>
                </div>
                <div className="item1">
                  <img src={Icon5} alt="icon" />
                  <p className="item-tags">24/7 Support</p>
                </div>
                <div className="item1">
                  <img src={Icon6} alt="icon" />
                  <p className="item-tags">Transparant Pricing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
