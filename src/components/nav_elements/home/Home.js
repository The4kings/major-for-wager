import React from "react";

import CreatePost from "./create_post/CreatePost";
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <CreatePost />
    </div>
  );
};

export default Home;
