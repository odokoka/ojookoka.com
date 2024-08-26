import React, { useRef, useState } from 'react';


export const Home = () => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);

    const toggleMute = () => {
        const video = videoRef.current;
        video.muted = !video.muted;
        setIsMuted(video.muted);
    };

    return (
        <div>
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
            <button className="video-muter-button" onClick={toggleMute}>
                {isMuted ? 'Unmute' : 'Mute'}
            </button>
        </div>
    );
};
