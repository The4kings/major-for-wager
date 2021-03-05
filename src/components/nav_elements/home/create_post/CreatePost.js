import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import './CreatePost.css';
import TextPreview from './routing/TextPreview';
import ImagePreview from './routing/ImagePreview';
import VideoPreview from './routing/VideoPreview';

const CreatePost = () => {
        return (
            <>
                <div className="create_post">
                    <div className="caption">
                        <input type="text"></input>
                    </div>
                    <div className="display">
                        <Switch>
                        <Route exact path="/" component={TextPreview}>
                        </Route>
                        <Route exact path="/ImagePreview" component={ImagePreview}>
                        </Route>
                        <Route exact path="/VideoPreview" component={VideoPreview}>
                        </Route>
                        </Switch>      
                    </div>
                    <div className="Routing_triggers">
                        <Link to="/"><button className="button button1">Text</button></Link>
                        <Link to="/ImagePreview"><button className="button button1">Image</button></Link>
                        <Link to="/VideoPreview"><button className="button button1">Video</button></Link>
                        <button className="button button2">Post</button>
                    </div>
                </div>
            </>
        );
}

export default CreatePost;