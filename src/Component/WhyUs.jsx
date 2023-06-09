import React from "react";
import "./WhyUs.css";
import Photo from "../Assests/Photo.png";
import Images from "../Assests/Images.png";
import Icon8 from "../Assests/IconSide/Icon8.png";
import Icon9 from "../Assests/IconSide/Icon9.png";

const WhyUs = () => {
  return (
    <div>
      <div className="cargo">
        <img src={Photo} alt="" className="photo" />
        <div className="overlay"></div>
        <div className="back">
          <div className="center">
            <div className="items">
              <p className="small">Why us </p>
              <h2>
                We provide full range global <br />
                logistics solution
              </h2>
              <div>
                <p className="tags">
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition.
                </p>
                <p className="tags ">
                  Organically grow the holistic world view of disruptive
                  innovation via workplace diversity and empowerment.
                </p>
                <div className="setting">
                  <img src={Icon8} alt="" className="icon" />
                  <span>Delivery on Time</span>
                </div>
                <div className="setting">
                  <img src={Icon9} alt="" className="icon" />
                  <span>Optimized Travel Cost</span>
                </div>
              </div>
            </div>
            <div className="items">
              <img src={Images} alt="" className="work" />
            </div>
          </div>
          <div className="part">
            <div className="line"></div>
            <div className="flex-side">
              <div className="side">
                <h1 className="num">1294</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    width="17"
                    height="17"
                    fill="url(#paint0_linear_1_4448)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_4448"
                      x1="0.0180415"
                      y1="3.68333"
                      x2="21.4042"
                      y2="5.20206"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFB629" />
                      <stop offset="0.507189" stopColor="#FFDA56" />
                      <stop offset="1" stopColor="#FFD7A6" />
                    </linearGradient>
                  </defs>
                </svg>
                <span>Delivered Packages</span>
              </div>
              <div className="vertical-line"></div>
              <div className="m-side">
                <h1 className="num">3594</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    width="17"
                    height="17"
                    fill="url(#paint0_linear_1_4448)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_4448"
                      x1="0.0180415"
                      y1="3.68333"
                      x2="21.4042"
                      y2="5.20206"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFB629" />
                      <stop offset="0.507189" stopColor="#FFDA56" />
                      <stop offset="1" stopColor="#FFD7A6" />
                    </linearGradient>
                  </defs>
                </svg>
                <span>Satisfied Clients</span>
              </div>
            </div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
