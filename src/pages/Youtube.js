import React, { useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeOff } from '@fortawesome/fontawesome-free-solid';
import { faVolumeUp } from '@fortawesome/fontawesome-free-solid';

export const Youtube = () => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        setIsMuted(prevState => !prevState);
    };
    return (
        <div className='video-container'>
            <video 
                width="100%" 
                ref={videoRef}
                autoPlay
                muted={isMuted}
                loop
            >
                <source src={`${process.env.PUBLIC_URL}/images/who-am-i-yt-vid.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <button className='video-muter-button' onClick={toggleMute}>
                <FontAwesomeIcon icon={isMuted ? faVolumeOff : faVolumeUp } size="2x" />
            </button>
        </div>
    );
}