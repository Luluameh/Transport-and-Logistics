import React from "react";
import "./MeetExpert.css";
import Image1 from "../Assests/Profiles/Image1.png";
import Image2 from "../Assests/Profiles/Image2.png";
import Image3 from "../Assests/Profiles/Image3.png";
import SocialMedia from "../Assests/Profiles/SocialMedia.png";
import SocialMedia1 from "../Assests/Profiles/SocialMedia1.png";
import SocialMedia2 from "../Assests/Profiles/SocialMedia2.png";

const MeetExpert = () => {
  return (
    <div className="meet-expert">
      <h3 className="det">The Transporter</h3>
      <h1 className="team">Meet Expert Team</h1>
      <div className="profile">
        <div className="profile-card">
          <img src={Image1} alt="Profile" />
          <div className="sub-pro">
            <h3 className="pro">Jessca Arow</h3>
            <p className="file">Designer</p>
          </div>
        </div>
        <div className="profile-card">
          <img src={Image2} alt="Profile" />
          <div className="sub-pro">
            <h3 className="pro">Kathleen Smith</h3>
            <p className="file">Designer</p>
          </div>
        </div>
        <div className="profile-card">
          <img src={Image3} alt="Profile" className="size" />
          <div className="sub-pro">
            <h3 className="pro">Rebecca Tylor</h3>
            <p className="file">Designer</p>
          </div>
        </div>
      </div>

      <div>
        <img src={SocialMedia} alt="" className="media-first" />
      </div>
      <div>
        <img src={SocialMedia2} alt="" className="media-second" />
      </div>

      <div>
        <img src={SocialMedia1} alt="" className="media-thrid" />
      </div>
    </div>
  );
};

export default MeetExpert;
