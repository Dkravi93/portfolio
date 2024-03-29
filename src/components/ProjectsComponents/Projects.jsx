import React from "react";
import "./projects.css";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import { ContactUs } from "../inputComponent/input";
import {
  handleClick1,
  handleClick2,
  handleClick3,
  handleClick4,
  handleClick5,
  handleClick6,
  handleClick7,
  handleClick8,
  handleClick9,
} from "../functionComponents/function";
import Ecom1 from "../images/Ecom1.png";
import Ecom2 from "../images/Ecom2.png";
import Ecom3 from "../images/MyEcomCart.png";

export default function Projects() {
  return (
    <div id="project">
      <div id="about">
        <h2>About</h2>
        <p>
          Passion-driven learner and a web developer with the ability to write
          clean, reusable, optimised code. Skilled and experienced at building
          and maintaining MERN based web applications. Looking forward to
          collaborate in a progressive and challenging work environment.
        </p>
        <span className="small_div">
          <LocationOnRoundedIcon />
          <p>Bangalore,India</p>
          <EmailRoundedIcon />
          <p>Dpakravi93@gmail.com</p>
          <CallRoundedIcon />
          <p>+918210192330</p>
        </span>
      </div>

      <div
        id="project_sectSkills"
        style={{ textAlign: "center", marginTop: "80px" }}
      >
        <h1>Skills & Interests</h1>

        <div id="project_sect2">
          <div className="Skills">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
              alt="imageSkills"
            />
            <div>Html</div>
          </div>
          <div className="Skills">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
              style={{ width: "80px" }}
              alt="imageSkills"
            />
            <div>CSS</div>
          </div>
          <div className="Skills">
            <img
              src="https://portfolio-saravanakumarjn.vercel.app/static/media/javascript.fd46ca41.svg"
              alt="imageSkills"
            />
            <div>JavaScript</div>
          </div>
          <div className="Skills">
            <img
              src="https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png"
              alt="imageSkills"
            />
            <div>NodeJS</div>
          </div>
          <div className="Skills">
            <img
              src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
              alt="imageSkills"
            />
            <div>Redux</div>
          </div>
          <div className="Skills">
            <img
              src="https://portfolio-saravanakumarjn.vercel.app/static/media/mongodb.153b7b44.svg"
              alt="imageSkills"
            />
            <div>MongoDb</div>
          </div>
          <div className="Skills">
            <img
              src="https://portfolio-saravanakumarjn.vercel.app/static/media/react.e27571ea.svg"
              alt="imageSkills"
            />
            <div>React</div>
          </div>
          <div className="Skills">
            <img
              src="https://portfolio-saravanakumarjn.vercel.app/static/media/github-icon.04ed74f3.svg"
              alt="imageSkills"
            />
            <div>GitHub</div>
          </div>
          <div className="Skills">
            <img
              src="https://ak.picdn.net/shutterstock/videos/1052373691/thumb/4.jpg"
              alt="imageSkills"
            />
            <div>DataStructure</div>
          </div>
          <div className="Skills">
            <img
              src="https://fd-development.com/images/expressjs.png"
              alt="imageSkills"
            />
            <div>Express</div>
          </div>
        </div>
      </div>
      <div id="project_sectProjects">
        <h1 style={{ textAlign: "center" }}>Projects</h1>
        <div id="project_sectPro">
          <div className="pro_card1">
            <h3 style={{ textAlign: "center" }}>My Ecommerce</h3>
            <div className="slider">
              <div>
                <img src={Ecom1} alt="imageSkills" />
              </div>
              <div>
                <img src={Ecom2} alt="imageSkills" />
              </div>
              <div>
                <img src={Ecom3} alt="imageSkills" />
              </div>
              <div>
                <img src={Ecom2} alt="imageSkills" />
              </div>
              <div>
                <img src={Ecom3} alt="imageSkills" />
              </div>
            </div>
            <br />
            <br />
            <div>
              <div>
                An Ecommerce Shopping online platform for variety of garment
                products.
              </div>
              <div>
                Tech Stack : React | Redux | Styled components | Material UI |
                NodeJS | ExpressJS | MongoDB
              </div>
              <span style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={handleClick5} className="button">
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
                    alt="Github"
                  />
                </button>
                <div> </div>
                <button onClick={handleClick6} className="button">
                  <img
                    src="https://img.icons8.com/fluency/30/000000/domain.png"
                    alt="website"
                  />
                </button>
              </span>
            </div>
          </div>
          <div className="pro_card1">
            <h3 style={{ textAlign: "center" }}>Alibaba Clone</h3>
            <div className="slider">
              <div>
                <img
                  src="https://raw.githubusercontent.com/Dkravi93/portfolio/master/src/components/images/pic1.png"
                  alt="imageSkills"
                  width="300"
                />
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/Dkravi93/portfolio/master/src/components/images/pic2.png"
                  alt="imageSkills"
                  width="300"
                />
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/Dkravi93/portfolio/master/src/components/images/pic3.png"
                  alt="imageSkills"
                  width="300"
                />
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/Dkravi93/portfolio/master/src/components/images/pic4.png"
                  alt="imageSkills"
                  width="300"
                />
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/Dkravi93/portfolio/master/src/components/images/pic5.png"
                  alt="imageSkills"
                  width="300"
                />
              </div>
            </div>
            <br />
            <br />
            <div>
              <div>
                An online global e-commerce website. Where customers can sell or
                buy product with variety of range.
              </div>
              <div>
                Tech Stack : React | Redux | Styled components | Material UI |
                NodeJS | ExpressJS | MongoDB
              </div>
              <span style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={handleClick1} className="button">
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
                    alt="Github"
                  />
                </button>
                <div> </div>
                <button onClick={handleClick2} className="button">
                  <img
                    src="https://img.icons8.com/fluency/30/000000/domain.png"
                    alt="website"
                  />
                </button>
              </span>
            </div>
          </div>
          <div className="pro_card1">
            <h3 style={{ textAlign: "center" }}>Pull And Bear Clone</h3>
            <div className="slider">
              <div>
                <img
                  src="https://raw.githubusercontent.com/Dkravi93/portfolio/master/src/components/images/pic6.png"
                  alt="imageSkills"
                  width="300"
                />
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/Dkravi93/portfolio/master/src/components/images/pic7.png"
                  alt="imageSkills"
                  width="300"
                />
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/Dkravi93/portfolio/master/src/components/images/pic8.png"
                  alt="imageSkills"
                  width="300"
                />
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/Dkravi93/portfolio/master/src/components/images/pic9.png"
                  alt="imageSkills"
                  width="300"
                />
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/Dkravi93/portfolio/master/src/components/images/pi1.png"
                  alt="imageSkills"
                  width="300"
                />
              </div>
            </div>
            <br />
            <br />
            <div>
              <div>
                A trending Europian website famous for western Apparels.
              </div>
              <div>
                Tech Stack : React | Redux | Styled components | Material UI |
                NodeJS | ExpressJS | MongoDB
              </div>
              <span style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={handleClick3} className="button">
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
                    alt="Github"
                  />
                </button>
                <div> </div>
                <button onClick={handleClick4} className="button">
                  <img
                    src="https://img.icons8.com/fluency/30/000000/domain.png"
                    alt="website"
                  />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <h1 style={{ textAlign: "center" }}>Contact</h1>
      <div id="project_sectContact">
        <div>
          <h2 style={{ color: "#00BFFF" }}>Have an idea?</h2>
          <h4 style={{ color: "#000" }}>Let's Connect!</h4>
          <div id="contact">
            <span>
              <button onClick={handleClick7}>
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
                  alt="imageSkills"
                />
              </button>

              <button onClick={handleClick8}>
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"
                  alt="imageSkills"
                />
              </button>

              <button onClick={handleClick9}>
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"
                  alt="imageSkills"
                />
              </button>
            </span>
          </div>
        </div>
        <div>
          <ContactUs />
        </div>
      </div>
      <hr />
    </div>
  );
}
