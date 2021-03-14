import React from "react";

import "./Profile.css";
import "./indu.css";

const Profile = () => {
  return (
            
            <div className="htmll">
              <div id='stars'></div>
              <div id='stars2'></div>
              <div id='stars3'></div>
              <div id='title'>
              <form onsubmit="return false;">
                  <label for="password">Password</label>
                  <input style={{width: '240px'}} id="password" type="password" pattern="123" placeholder="Enter your password" required="required" title="Wasn't your password &quot;password123&quot;? 🤫"/>
                  <input id="login" type="checkbox"/>
                  <label class="login-button" for="login"><span>Enter</span>
                  <svg>
                  <path d="M10,17V14H3V10H10V7L15,12L10,17M7,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V16H7V20H17V4H7V8H5V4A2,2 0 0,1 7,2Z"></path>
                  </svg>
                  </label>
                  <div class="padlock">
                  <div class="padlock__hook">
                  <div class="padlock__hook-body"></div>
                  <div class="padlock__hook-body"></div>
                  </div>
                  <div class="padlock__body">
                  <div class="padlock__face">
                  <div class="padlock__eye padlock__eye--left"></div>
                  <div class="padlock__eye padlock__eye--right"></div>
                  <div class="padlock__mouth padlock__mouth--one"></div>
                  <div class="padlock__mouth padlock__mouth--two"></div>
                  <div class="padlock__mouth padlock__mouth--three"></div>
                  </div>
                  </div>
                  </div>
                
                  <div class="app fot">
                  <div className="profilee">
                  <div class="blurred-box">
                  <div class="user-login-box">
                  <span class="user-icon"></span>
                  <div className="datavata">
                    <div class="user-name">Name :</div>
                    <div class="form__group">
                    <input type="text" class="form__input" id="name" placeholder="Full name" required="" />
                    <label for="name" class="form__label">suck</label>
                    </div>
                    <div class="user-name">Email id :</div>
                    <div class="form__group">
                    <input type="text" class="form__input" id="name" placeholder="Full name" required="" />
                    <label for="name" class="form__label">suck</label>
                    </div>
                    <div class="user-name">Password :</div>
                    <div class="form__group">
                    <input type="text" class="form__input" id="name" placeholder="Full name" required="" />
                    <label for="name" class="form__label">suck</label>
                    </div>
                    <div class="user-name">Phone no. :</div>
                    <div class="form__group">
                    <input type="text" class="form__input" id="name" placeholder="Full name" required="" />
                    <label for="name" class="form__label">suck</label>
                    </div>
                    <div class="user-name">Social links :</div>
                    <div class="form__group">
                    <input type="text" class="form__input" id="name" placeholder="Full name" required="" />
                    <label for="name" class="form__label">suck</label>
                    </div>
                  </div>
                  </div>
                  </div>
                  <button class="logout-button" type="reset" style={{marginLeft: '694px' ,marginTop: '42px'}}>Logout</button>
                  </div>
                  </div>
                  <span class="logout-message">You have logged out.</span> 
              </form>
              </div>
            </div>
    )
};

export default Profile;
