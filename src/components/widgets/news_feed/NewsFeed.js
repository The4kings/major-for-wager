import React from "react";

import "./News.css";

const NewsFeed = () => {
  return (
    <>
      <div className=" news">
        <h2 className="headingg left" style={{ paddingLeft: "12px" }}>
          Tech News
        </h2>
        <ul
          className="left expandible"
          style={{ marginLeft: "0px", paddingLeft: "0px" }}
        >
          <li style={{ paddingLeft: "12px" }}>
            <a href="#" className="heading1">
              Meet Linkdln Top Voices:NExt Gen
            </a>
            <p className="heading2">Top News ♥ 1,752 reader</p>
          </li>
          <li style={{ paddingLeft: "12px" }}>
            <a href="#" className="heading1">
              Meet Linkdln Top Voices:NExt Gen
            </a>
            <p className="heading2">Top News ♥ 1,752 reader</p>
          </li>
          <li style={{ paddingLeft: "12px" }}>
            <a href="#" className="heading1">
              Meet Linkdln Top Voices:NExt Gen
            </a>
            <p className="heading2">Top News ♥ 1,752 reader</p>
          </li>
          <li style={{ paddingLeft: "12px" }}>
            <a href="#" className="heading1">
              Meet Linkdln Top Voices:NExt Gen
            </a>
            <p className="heading2">Top News ♥ 1,752 reader</p>
          </li>
          <li style={{ paddingLeft: "12px" }}>
            <a href="#" className="heading1">
              Meet Linkdln Top Voices:NExt Gen
            </a>
            <p className="heading2">Top News ♥ 1,752 reader</p>
          </li>

          <div class="more">
            <input type="checkbox" id="check_id"></input>
            <label className="label" for="check_id" style={{ width: "315px", height: "100px" }}></label>
            <ul className="expandible" style={{ paddingLeft: "1px" }}>
              <li>
                <a href="#" className="heading1">
                  Meet Linkdln Top Voices:NExt Gen
                </a>
                <p className="heading2">Top News ♥ 1,752 reader</p>
              </li>
              <li>
                <a href="#" className="heading1">
                  Meet Linkdln Top Voices:NExt Gen
                </a>
                <p className="heading2">Top News ♥ 1,752 reader</p>
              </li>
              <li>
                <a href="#" className="heading1">
                  Meet Linkdln Top Voices:NExt Gen
                </a>
                <p className="heading2">Top News ♥ 1,752 reader</p>
              </li>
              <li>
                <a href="#" className="heading1">
                  Meet Linkdln Top Voices:NExt Gen
                </a>
                <p className="heading2">Top News ♥ 1,752 reader</p>
              </li>
              <li>
                <a href="#" className="heading1">
                  Meet Linkdln Top Voices:NExt Gen
                </a>
                <p className="heading2">Top News ♥ 1,752 reader</p>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </>
  );
};

export default NewsFeed;
