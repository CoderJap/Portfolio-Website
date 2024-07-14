import "./FooterStyles.css";

import React from 'react'
import {FaHome,FaPhone,FaMailBulk,FaLinkedin,FaFacebook,FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div><p>Chandigarh</p>
            </div>
          </div>
          <div className="phone">
            <h4> <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>9780997833</h4>
          </div>
          <div className="gmail">
            <h4> <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>japjotwork007@gmail.com</h4>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>B.Tech Student | Coding, Data Structures & Algorithms, Web Development | Excited About Tech!</p>
          <div className="social">
          <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
          <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
          <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer