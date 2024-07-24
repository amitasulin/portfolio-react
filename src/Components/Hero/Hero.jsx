import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img3.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Amit Asulin,</span> full stack developer based in Israel.
      </h1>
      <p>
        I am a full stack developer from Afula, Israel with 2 years of
        experience in my own business.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            {" "}
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          {" "}
          {
            <a href="https://issuu.com/amitasulin/docs/amit_asulin_-cv.docx">
              My resume{" "}
            </a>
          }
        </div>
      </div>
    </div>
  );
};

export default Hero;
