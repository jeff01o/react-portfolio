import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div>
      <nav className="header">
        <div class="logo">
          <a href="#">
            <span className="v">V</span>ASCO
          </a>
        </div>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">SERVICES</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <a href="#">PORTFOLIO</a>
          </li>
          <button className="contact">Contact Me</button>
        </ul>
      </nav>
    </div>
  );
}
