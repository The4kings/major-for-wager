import React from "react";

import dp from "../../assets/dp.png";
import "./ProfileCard.css";



const ProfileCard = () => {
  return (
    <>
      <div className="parent">
        <div className="cover">
          <img className="dp" src={dp} alt="Avatar"></img>
        </div>
        <div className="profile">
          <div className="profileName heading">Ritesh Gupta</div>
          <p className="about">Django|Python</p>
        </div>
        <div className="info">
            <p className="heading2" style={{ marginBottom:"8px"}}> <span style={{fontWeight:"bold"}}>Email :</span> 246riteshgupta@gmail.com</p>
            <p className="heading2" style={{ marginBottom:"0px"}}> <span style={{fontWeight:"bold"}}>Phone no:</span> 754920865</p>
        </div>
        <div className="skills">
            <p className="inline left heading2 hehe"><span style={{fontWeight:"bold"}}>Skills :</span></p>
            <div className="skillslist inline">
                <ul className="inline heading2 hoho" style={{float:"right", height: "88px",marginBottom: "1px", width: "126px"}}>
                    <li>HTML/CSS</li>
                    <li>Javascript</li>
                    <li>React js</li>
                    <li>Node js</li>
                    <li>C/C++</li>
                </ul>
            </div>
        </div>
        <div className="social">
            <p className="heading2" style={{fontWeight:"bold"}}>Social Links:</p>
            <span>
              <i class="fa fa-github" aria-hidden="true" style={{margin:"5px"}}></i>
              <i class="fa fa-linkedin" aria-hidden="true" style={{margin:"5px"}}></i>
              <i class="fas fa-ghost" style={{margin:"5px"}}></i>
            </span>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
