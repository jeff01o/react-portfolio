import React from "react";
import image2 from "../Tools/image2.JPG";
import "./TopContent.css";
export default function TopContent() {
  return (
    <div className="top-content">
      <img className="image2" src={image2}></img>
      <h1 className="jordan">Jordan Smith </h1>
      <p className="creative">A Creative Freelancer & Full Stack Developer</p>
    </div>
  );
}
