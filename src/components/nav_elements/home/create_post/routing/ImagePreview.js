import React from 'react'
import dp from '../../../../assets/dp.png';

function ImagePreview() {
    return (
        <>
            <img src={dp} alt="profile_pic" style={{width: "610px"}}></img>
            <input type="file"></input>
        </>
    )
}

export default ImagePreview
