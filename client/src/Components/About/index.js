import React from "react";
import "./style.css";

function About() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <img
          src="assets/sb.jpg"
          className="img-fluid selfie"
          alt="sara bolduc"
        />
        <p className="lead">
          <strong>Full Stack Developer</strong> <br />
          <span className="sub">
            with experience in Maker Education, media, and film
          </span>
          <br />
          <br />
          Using art & technology as mediums, I have designed learning
          experiences and social events aimed to inspire curiosity & spark
          imagination for over 2,000 students & families. I want to build
          applications that have a social impact & foster community and
          collaboration.
        </p>
      </div>
    </div>
  );
}
export default About;
