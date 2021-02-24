import React from "react";

import Navbar from "./components/navbar/Navbar";
import NewsFeed from "./components/right_section/news_feed/NewsFeed";
import ProfileCard from "./components/left_section/profile_card/ProfileCard";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ProfileCard />
      <NewsFeed />
    </div>
  );
};

export default App;
