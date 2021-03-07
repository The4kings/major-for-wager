import React from "react";
import Home from "../nav_elements/home/Home";
import JobsApplied from "../nav_elements/jobs_applied/JobsApplied";
import Profile from "../nav_elements/profile/Profile";
import SearchJobs from "../nav_elements/search_jobs/SearchJobs";
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <img className="nav_logo" src={logo} alt="Logo"></img>
        <section className="nav_items color-5">
          <nav class="cl-effect-5">
            <NavLink exact className="links" to="/">
              <span data-hover="Home">Home</span>
            </NavLink>
            <NavLink exact className="links" to="/SearchJobs">
              <span data-hover="SearchJobs">Search Jobs</span>
            </NavLink>
            <NavLink exact className="links" to="/JobsApplied">
              <span data-hover="JobsApplied">Jobs Applied</span>
            </NavLink>
            <NavLink exact className="links" to="/Profile">
              <span data-hover="Profile">Profile</span>
            </NavLink>
          </nav>
        </section>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/SearchJobs" component={SearchJobs} />
        <Route exact path="/JobsApplied" component={JobsApplied} />
        <Route exact path="/Profile" component={Profile} />
      </Switch>
    </>
  );
};

export default Navbar;
