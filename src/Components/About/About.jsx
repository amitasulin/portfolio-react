import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img3.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              A full-stack developer with two years of professional experience
              specializing in web development, project management, Agile
              methodology, and quality assurance testing
            </p>
            <p>
              Adept at coordinating effectively with development teams, clients,
              and non-technical stakeholders to execute complex web development
              projects.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "85%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p> <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Mongo DB</p> <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievment">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
