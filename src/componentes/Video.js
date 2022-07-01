import React from 'react';
import ReactPlayer from 'react-player';

const Video = (video) => {
    return (
        <>
            <ReactPlayer 
            url={require('../image/video-1.mp4')}
            width="100%"
            height="100%"
            playing
            loop
            onPlay={()=>alert("se presiono e inicio el video")}
            /> 
        </>
    );
}

export default Video;

