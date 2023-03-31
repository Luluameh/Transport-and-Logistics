import React from "react";
import "./Nav.css";
import Logo from "../Assests/Logo.png";
import Time from "../Assests/IconSide/Time.png";
import mail from "../Assests/IconSide/mail.png";
import call from "../Assests/IconSide/call.png";
import bghero from "../Assests/bghero.jpg";
import Instagram from "../Assests/Social/Instagram.png";
import twitter from "../Assests/Social/Twitter.png";
import linkdin from "../Assests/Social/Linkdin.png";
import facebook from "../Assests/Social/Facebook.png";

const Nav = () => {
  return (
    <div>
      <div className="container">
        <div className="content ">
          <div className="logo-lead">
            <img src={Logo} className="logo" alt="hmm" />
          </div>
          <div className="contact">
            <div className="sub con1">
              <img className="phone icon" src={call} alt="Icon" />
              <p>Mon - Sat 9.00 - 18.00 Sunday Closed</p>
            </div>
            <div className="sub con2">
              <img className="mail icon" src={mail} alt="Icon" />
              <p>Email contact@logistics.com</p>
            </div>
            <div className="sub con3">
              <img className="clock icon" src={Time} alt="Icon" />
              <p>
                Call Us <br></br> (00) 112 365 489
              </p>
            </div>
          </div>
          {/**stop */}
        </div>
      </div>

      {/**the headerside and menu  */}
      <div className="header">
        <img src={bghero} alt="" className="bghero" />
        <div className="menu">
          <div className="menu-content">
            <ul>
              <li>Home</li>
              <hr />
              <li>About</li>
              <li>
                <form>
                  <select>
                    <option value="page">Pages1</option>
                    <option value="page" selected>
                      pages
                    </option>
                    <option value="Fiat">page2</option>
                  </select>
                </form>
              </li>
              <li>Project</li>
              <li>contact</li>
            </ul>
          </div>
          <div className="social-handle">
            <img src={Instagram} alt="" className="" />
            <img src={facebook} alt="" className="" />
            <img src={twitter} alt="" className="" />
            <img src={linkdin} alt="" className="" />
          </div>
          <button>Request Qoute</button>
        </div>
        <div className="middle-header">
          <h4 className="logi">Logistic & suppy chain solution</h4>
          <h1>
            Your Gateway <br />
            to any Destination <br />
            in the world
          </h1>
          <p className="text">
            In augue ligula, feugiat ut nulla consequat. Ut est lacus,molestiein
            arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl
            iddapibusfinibus, enim diam interdum nulla, sed laoreet risus
            lectus.
          </p>
          <button className="button">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
