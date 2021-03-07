import React from 'react';

import './CreatePost.css';

const CreatePost = () => {
        return (
            <>
                <div className="create_post">
                    <div className="caption">
                        <input type="text" name="name" class="question" id="nme" required autocomplete="off" />
                        <label for="nme"><span>What's this post about?</span></label>
                        <textarea placeholder="Write your post here ..." name="message" rows="2" class="question" id="msg" required autocomplete="off"></textarea>
                    </div>
                    <div className="Routing_triggers">
                        <button className="button button1">Photo</button>
                        <button className="button button1">Video</button>
                        <button className="button button1">Post</button>
                    </div>
                </div>
            </>
        );
}

export default CreatePost;