import React from "react";
import image1 from "../Tools/image1.JPG";
import "./MiddleContent.css";
export default function MiddleContent() {
  return (
    <div>
      <div className="container">
        <img className="image1" src={image1}></img>
        <div className="discover">
          <p className="text">
            <p className="first">Discover</p>
            <h2 className="about">
              <span className="about2">Ab</span>out Me
            </h2>
            My name is Jordan smith, i'm a freelance full stack developer based
            in New York , USA, and i'm very passionate and dedicated to my work
            , with 2 years of experience as a profeional Full Stack Developer,I
            have aquired the skills to build great and premium websites
          </p>
          <div className="table">
            <p>
              <span>
                <b>Name: </b>
              </span>
              Jordan smith
            </p>
            <p>
              <b>Phone: </b>+1 542 347 890
            </p>
            <p>
              <b>Experience: </b>2 years
            </p>
            <p>
              <b>Age: </b>21
            </p>
            <p>
              <b>Address: </b>New York USA
            </p>
            <p>
              <b>Freelance: </b>Available
            </p>
          </div>
          <button className="cv">DOWNLOAD CV</button>
        </div>
      </div>
    </div>
  );
}
