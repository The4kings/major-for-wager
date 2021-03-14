import React from "react";

import CreatePost from "./create_post/CreatePost";
import './Home.css';
import PostBox from './post_container/index';
import ProfileCard from '../../widgets/profile_card/ProfileCard';
import NewsFeed from '../../widgets/news_feed/NewsFeed';
import Footer from "../../footer/Footer";

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
      <div className="bitch">
      <ProfileCard />
      </div>
      <div className="newsnews"><NewsFeed /></div>
      <div className="advertisement">
        <h1>Fuck this shit</h1>
      </div>
      <div className="opp">
      <Footer />
      </div>
    </div>
  );
};

export default Home;
