import React from "react";
import webdesign from "../Tools/webdesign.svg";
import reponsive from "../Tools/responive.svg";
import database from "../Tools/database.svg";
import "./BottomContent.css";

export default function BottomContent() {
  return (
    <div className=".bottomcontent">
      <div className="bottom-top">
        <h2 className="what">what i do </h2>
        <h1 className="my-services">
          <span className="my">My</span> Services
        </h1>
      </div>
      <div className="box-container">
        <div className="box">
          <img src={reponsive} className="svgs"></img>
          <h2>Responive Web Design</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
            sollicitudin tellus.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Cras nec sollicitudin tellus.
          </p>
        </div>
        <div className="box">
          <img className="svgs" src={webdesign}></img>
          <h2>Web Development</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
            sollicitudin tellus.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Cras nec sollicitudin tellus.
          </p>
        </div>
        <div className="box">
          <img className="svgs" src={database}></img>
          <h2>Database Development</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
            sollicitudin tellus.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Cras nec sollicitudin tellus.
          </p>
        </div>
      </div>
    </div>
  );
}
