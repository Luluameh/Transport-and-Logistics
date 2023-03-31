import React from "react";
import "./MessageUs.css";
import Time from "../Assests/icons/Time.png";
import mail from "../Assests/icons/mail.png";
import call from "../Assests/icons/call.png";
import one from "../Assests/MessageUsImg/one.png";
import two from "../Assests/MessageUsImg/two.png";
import three from "../Assests/MessageUsImg/three.png";
import four from "../Assests/MessageUsImg/four.png";

const MessageUs = () => {
  return (
    <div className="message">
      <div className="in-contact">
        <div className="get-contact">
          <p className="sm-head">Contact</p>
          <h1 className="big-head">Get in touch with us</h1>
          <p className="para-head">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value.
          </p>
          <div className="ontact">
            <div className="sub-con">
              <img className="size" src={mail} alt="Icon" />
              <p className="enqury">Email contact@logistics.com</p>
            </div>
            <div className="sub-con">
              <img className="size" src={Time} alt="Icon" />
              <p className="enqury">
                Call Us <br></br> (00) 112 365 489
              </p>
            </div>
            <div className="sub-con">
              <img className="size" src={call} alt="Icon" />
              <p className="enqury">Mon - Sat 9.00 - 18.00 Sunday Closed</p>
            </div>
          </div>
        </div>
        <div className="input-form">
          <form action>
            <div className="required">
              <input
                type="text"
                placeholder="Your name "
                className="input-size"
              />
              <input type="text" placeholder="City " className="input-size" />
            </div>
            <div className="required">
              <input
                type="email"
                id="email"
                className="input-size"
                placeholder=" e.g: name@.com"
                required
              />
              <input
                type="tel"
                id="phone"
                className="input-size"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
            <div className="div-textarea">
              <textarea placeholder="Message" className="textarea"></textarea>
            </div>
            <button className="form-btn">submit Message</button>
          </form>
        </div>
      </div>
      <div className="four-div">
        <img src={one} alt="" className="size-reduction" />
        <img src={two} alt="" className="size-reduction" />
        <img src={three} alt="" className="size-reduction" />
        <img src={four} alt="" className="size-reduction" />
      </div>
    </div>
  );
};

export default MessageUs;
