import React from "react";

import CreatePost from "./create_post/CreatePost";
import './Home.css';
import PostBox from './post_container/index';
import ProfileCard from '../../widgets/profile_card/ProfileCard';
import NewsFeed from '../../widgets/news_feed/NewsFeed';

const Home = () => {
  return (
    <div className="home">
      <CreatePost />
      <hr></hr>
      <div className="smalltext">
        <p>Post's :</p>
      </div>
      <PostBox />
      <PostBox />
      <PostBox />
      <PostBox />
      <PostBox />
      <PostBox />
      <ProfileCard />
      <NewsFeed />
      <div className="advertisement">
        <h1>Fuck this shit</h1>
      </div>
    </div>
  );
};

export default Home;
