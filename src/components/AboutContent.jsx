import { BiColor } from "react-icons/bi";
import "./AboutContentStyles.css";

import React from "react";
import {Link} from "react-router-dom"
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp"
import React3 from "../assets/react-3.avif"
import React4 from "../assets/react-4.jpg"
import React5 from "../assets/react-1.webp"
import React6 from "../assets/react-2.webp"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm currently pursuing a B.Tech and am in my second year. I've learned
          Data Structures and Algorithms (DSA) in C++, and have delved into web
          development with HTML, CSS, JavaScript, and am currently mastering
          ReactJS. Additionally, I have experience with Python and its libraries
          like Tkinter. These technologies form the core of my current tech
          stack, but I'm always exploring new tools and improving my skills
          every day.
        </p>
        <Link to="/contact">
        <button className="btn">Contact</button></Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React5} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React6} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
