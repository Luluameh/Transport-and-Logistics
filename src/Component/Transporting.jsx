import React from "react";
import "./Transporting.css";
import one from "../Assests/MoreWork/one.png";
import two from "../Assests/MoreWork/two.png";
import three from "../Assests/MoreWork/three.png";
import four from "../Assests/MoreWork/four.png";
import five from "../Assests/MoreWork/five.png";
import Pattern from "../Assests/MoreWork/Pattern.png";

const Transporting = () => {
  return (
    <div className="trans">
      <div className="top-con">
        <div className="txt">
          <h2 className="mmm">Transporting Across The World</h2>
        </div>
        <div className="sample-img">
          <img className="imgGrid" src={one} alt="imageA" />
          <img className="imgGrid" src={two} alt="imageB" />
          <img className="imgGrid" src={three} alt="imageC" />
          <img className="imgGrid" src={four} alt="imageD" />
          <img className="imgGrid" src={five} alt="imageE" />
        </div>
        <div className="btn">
          <button className="blue-btn">
            More work
            <img className="debree" src={Pattern} alt="button"></img>
          </button>
        </div>
      </div>
      <div className="low-con"></div>
    </div>
  );
};

export default Transporting;
