import React from 'react'
import vid from '../../../../assets/vid.mp4';

function VideoPreview() {
    return (
        <>
            <video width="610" height="345" controls >
                <source src={vid} type="video/mp4"/>
            </video>
            <input type="file"></input>
        </>
    )
}

export default VideoPreview
